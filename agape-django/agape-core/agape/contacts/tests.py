from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

import json
from django.utils import timezone
from datetime import timedelta

# Create your tests here.
from .models import Contact
from .serializers import ContactSerializer

from agape.people.models import Person
from agape.people.serializers import PersonSerializer

from agape.signals import on

# from .settings import AUTHENTICATION

class ContactTestCase(TestCase):

    def setUp(self):
        self.person = Person(first_name="Elvis",middle_name="Aaron",last_name="Presley", birthday="1935-01-08", gender="m")
        self.person.save()
        
    def test_sanity(self):
        self.assertTrue(True, "Sane")

    def test_create(self):
        instance = Contact(progenitor=self.person.moniker(), type=Contact.TELEPHONE, label="Home", value="+507 5555 5555")
        instance.save()

        self.assertEqual(instance.id, 1, 'Created contact')
        self.assertEqual(instance.progenitor, 'person:1', 'Progenitor set')
        self.assertEqual(instance.type, Contact.TELEPHONE, 'Contact type set')
        self.assertEqual(instance.value, '+507 5555 5555', 'Contact value set')


class ContactSerializerTestCase(TestCase):

    def setUp(self):
        self.person = Person(first_name="Elvis",middle_name="Aaron",last_name="Presley", birthday="1935-01-08", gender="m")
        self.person.save()

    def test_serialize(self):
        instance = Contact(progenitor=self.person.moniker(), type=Contact.TELEPHONE, label="Home", value="+507 5555 5555")
        instance.save()

        serializer = ContactSerializer(instance)

        expect = {
            'id':1,
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }

        self.assertDictEqual(expect, serializer.data)

    def test_inflate(self):

        data = {
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }

        # serializer data is valid
        serializer = ContactSerializer(data=data)
        self.assertTrue(serializer.is_valid(), 'Serializer data is valid')

        # create an instance via the serializer
        instance = serializer.create(serializer.validated_data)
        self.assertTrue(instance, 'Created instance from serializer data')

        # verify instance values
        self.assertEqual(instance.id, 1, 'Contact assigned new ID')
        self.assertEqual(instance.type, Contact.TELEPHONE)
        self.assertEqual(instance.progenitor, 'person:1')
        self.assertEqual(instance.value, '+507 5555 5555')
        self.assertEqual(instance.label, "Home")


        # verify partial modification
        data = {
            'id': instance.id,
            'value': '+507 4444 4444'
        }
        serializer = ContactSerializer(data=data,partial=True)
        self.assertTrue(serializer.is_valid(), 'Serializer data is valid')

        # update the instance
        serializer.update(instance,data)
        self.assertEqual(instance.value, '+507 4444 4444')

class APITestCase(TestCase):

    def setUp(self):
        self.client =  APIClient()
        self.person = Person(first_name="Elvis",middle_name="Aaron",last_name="Presley", birthday="1935-01-08", gender="m")
        self.person.save()
 

    def test_create_contact(self):
        data = {
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }      
        response = self.client.post('/api/v1/contacts/', data)
        self.assertEqual(response.status_code, 201, "Created new contact")
        
        self.assertEqual(response.data.get('id'), 1, 'Contact assigned new ID')
        self.assertEqual(response.data.get('progenitor'), "person:1")
        self.assertEqual(response.data.get('type'), Contact.TELEPHONE )
        self.assertEqual(response.data.get('value'), '+507 5555 5555')
        self.assertEqual(response.data.get('label'), "Home" )

        # verify actual database record was created
        instance = Contact.objects.get(id=response.data.get('id'))
        self.assertTrue(instance)

    def test_retrieve(self):

        data = {
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }      
        response = self.client.post('/api/v1/contacts/', data)
        self.assertEqual(response.status_code, 201, "Created new contact")
        
        response = None
        response = self.client.get('/api/v1/contacts/1/')
        self.assertEqual(response.data.get('id'), 1, 'Contact assigned new ID')
        self.assertEqual(response.data.get('progenitor'), "person:1")
        self.assertEqual(response.data.get('type'), Contact.TELEPHONE )
        self.assertEqual(response.data.get('value'), '+507 5555 5555')
        self.assertEqual(response.data.get('label'), "Home" )

        
    def test_update_contact(self):

        data = {
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }      
        response = self.client.post('/api/v1/contacts/', data)
        self.assertEqual(response.status_code, 201, "Created new contact")


        data = { 'value':'+507 4444 4444' } 
        response = self.client.patch( 
            '/api/v1/contacts/{}/'.format(response.data.get('id')),
             json.dumps(data),
              content_type='application/json')
        self.assertEqual(response.data.get('value'), '+507 4444 4444')



    def test_delete_contact(self):
        data = {
            'progenitor':'person:1',
            'type':Contact.TELEPHONE,
            'value':'+507 5555 5555',
            'label':'Home'
        }      
        response = self.client.post('/api/v1/contacts/', data)
        self.assertEqual(response.status_code, 201, "Created new contact")
        id = response.data.get('id')

        uri = '/api/v1/contacts/{}/'.format(response.data.get('id'))
        response = self.client.delete( uri )    
        self.assertEqual(response.status_code, 204, "Deleted")

        query = Contact.objects.filter(id=id)
        self.assertEqual(len(query),0, "Deleted")


class ContactsConnectionTestCase(TestCase):

    def setUp(self):
        self.client =  APIClient()

        from .connector import ContactsConnector

        connector = ContactsConnector()
        connector.connect_to_entity('person')
        # connector.connect('agape.people')


    def test_create(self):

        data = {
            'first_name':'Elvis',
            'middle_name':'Aaron',
            'last_name':'Presley',
            'birthday': "1935-01-08",
            'gender': 'm',
            'contacts': [
                {'type':Contact.TELEPHONE, 'label':'Home', 'value':'Priceless'},
                {'type':Contact.EMAIL, 'label':'Work', 'value':'test@example.com'},
            ]
        }        
        response = self.client.post('/api/v1/people/', data)
        self.assertEqual(response.status_code, 201, "Created new person")

        # find the contact that was created
        contact = Contact.objects.get(id=1)
        self.assertEqual(contact.value, 'Priceless', "Created phone record")

        contact = Contact.objects.get(id=2)
        self.assertEqual(contact.value, 'test@example.com', "Created email record")




# class PeopleContactsConnectionTestCase(TestCase):

#     def setUp(self):
#         self.client =  APIClient()

#         # create callbacks on person creation
#         scope = {}

#         def catch_incoming_data(o,request):
#             scope['contactData'] = None
#             scope['contactData'] = request.data.get('contacts',[])

#         def create_contacts(o,person):

#             print( scope['contactData'] );

#             for contact in scope['contactData']:
#                 contact['progenitor'] = person.moniker()

#             serializer = ContactSerializer(data=scope['contactData'], many=True)
#             if serializer.is_valid():
#                 recordSet = serializer.save()

#         on('person.create:before',catch_incoming_data)
#         on('person.create:success',create_contacts)

#     def test_create_contacts(self):

#         data = {
#             'first_name':'Elvis',
#             'middle_name':'Aaron',
#             'last_name':'Presley',
#             'birthday': "1935-01-08",
#             'gender': 'm',
#             'contacts': [
#                 {'type':Contact.TELEPHONE, 'label':'Home', 'value':'Priceless'},
#                 {'type':Contact.EMAIL, 'label':'Work', 'value':'test@example.com'},
#             ]
#         }        
#         response = self.client.post('/api/v1/people/', data)
#         self.assertEqual(response.status_code, 201, "Created new person")

#         # find the contact that was created
#         contact = Contact.objects.get(id=1)
#         self.assertEqual(contact.value, 'Priceless', "Created phone record")

#         contact = Contact.objects.get(id=2)
#         self.assertEqual(contact.value, 'test@example.com', "Created email record")

