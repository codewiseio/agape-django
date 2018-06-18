
# testing classes
from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

# agape classes
from agape.signals import on

# utility classes
import json
from django.utils import timezone
from datetime import timedelta
import datetime

# package classes
from .models import Member
from .serializers import MemberSerializer
from agape.people.models import Person
from agape.organizations.models import Organization


MODEL = Member
SERIALIZER_CLASS = MemberSerializer
CREATE_DATA = {
    'progenitor':'organization:1',
    'person_id':'1'
}

EXPECT_DATA = {   
    'id':1,
    'progenitor':'organization:1'
}

UPDATE_DATA = { 
    'join_date': '2001-01-01 00:00:00'
}
UPDATE_EXPECT_DATA= {   
    'join_date':  datetime.datetime(2001, 1, 1, 0, 0)
}

class ModelTestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA
        self.expect_data        = EXPECT_DATA
        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_EXPECT_DATA

        self.person = Person.objects.create(first_name="Martin",last_name="Luther")

    def test_create(self):
        instance = self.model(**self.create_data)
        instance.save()
        self.assertEqual(instance.id, 1, "Instance saved to database" )


        # compare instance to expected data
        for key in self.expect_data.keys():
            instance_value = getattr(instance, key)
            expected_value = self.expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        member = self.model.objects.get(pk=instance.id)
        self.assertTrue(member,"Retrieved member object")
        self.assertTrue(member.person,"Rtreieved person object")


    def test_update(self):
        instance = self.model(**self.create_data)
        instance.save()

        # update the instance
        for key, value in self.update_data.items():
            instance_value = setattr(instance, key, value )
        
        # save the instance
        instance.save()

        # retrieve the instance
        instance_id = instance.id
        instance = None
        instance = self.model.objects.get(id=instance_id)

        # compare instance to expected data
        for key in self.update_expect_data.keys():
            instance_value = getattr(instance, key)
            expected_value = self.update_expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )



class SerializerTestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA
        self.expect_data        = EXPECT_DATA
        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_EXPECT_DATA

        self.person = Person.objects.create(first_name="Martin",last_name="Luther")

    def test_serialize(self):
        instance =self.model(**self.create_data)
        instance.save()

        serializer = self.serializer_class(instance)

        # compare instance to expected data
        for key in self.expect_data.keys():
            instance_value = getattr(instance, key)
            expected_value = self.expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

    def test_create(self):

        # serializer data is valid
        serializer = self.serializer_class(data=self.create_data)
        self.assertTrue(serializer.is_valid(), 'Serializer data is valid')

        # create an instance via the serializer
        instance = serializer.create(serializer.validated_data)
        self.assertTrue(instance, 'Created instance from serializer data')

        # compare instance to expected data
        for key in self.expect_data.keys():
            instance_value = getattr(instance, key)
            expected_value = self.expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

    def test_update(self):
        instance =self.model(**self.create_data)
        instance.save()


        serializer = self.serializer_class(data=self.update_data,partial=True)
        self.assertTrue(serializer.is_valid(), 'Serializer data is valid')
        instance = serializer.update(instance, serializer.validated_data)

        # compare instance to expected data
        for key, expected_value in self.update_expect_data.items():
            instance_value = getattr(instance, key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )



class APITestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA
        self.expect_data        = EXPECT_DATA
        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_EXPECT_DATA.copy()
        self.update_expect_data['join_date'] = '2001-01-01T00:00:00'

        self.client =  APIClient()
        self.entity = 'member'
        self.api_end_point = '/api/v1/members/'

    def test_create(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        # compare response to expected data
        for key, expected_value in self.expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        # verify actual database record was created
        instance = self.model.objects.get(id=response.data.get('id'))
        self.assertTrue(instance)

    def test_retrieve(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)
        self.assertEqual(response.status_code, 201, "Retrieved")

        response = None
        response = self.client.get(uri)

        # compare response to expected data
        for key, expected_value in self.expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

    def test_update(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = self.client.patch(uri, json.dumps(self.update_data), content_type='application/json')
        self.assertEqual(response.status_code, 200, "Updated instance")

        # validate response
        for key, expected_value in self.update_expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        # perform get operation and validate
        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = None
        response = self.client.get(uri)

        # compare response to expected data
        for key, expected_value in self.update_expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

    def test_delete(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = self.client.delete( uri )    
        self.assertEqual(response.status_code, 204, "Deleted")

        query = self.model.objects.filter(id=instance_id)
        self.assertEqual(len(query),0, "Deleted")

    def test_list(self):

        # create an organization
        organization = Organization.objects.create(name="Planet Express")

        # create people
        data = [
            {'title': 'Mr.', 'first_name':'Ben'     , 'last_name':'Grimm'   , 'birthday': '1980-01-01', 'gender':'m'},
            {'title': 'Mr.', 'first_name':'Johnny'  , 'last_name':'Storm'   , 'birthday': '1990-07-11', 'gender':'m'},
            {'title': 'Miss', 'first_name':'Sue'    , 'last_name':'Storm'   , 'birthday': '1989-12-28', 'gender':'f'},
            {'title': 'Dr.', 'first_name':'Reed'    , 'last_name':'Richards', 'birthday': '1969-04-11', 'gender':'m'}
        ]
        for idata in data:
            person = Person.objects.create(**idata )
            member = Member.objects.create(progenitor=organization.moniker(),person=person,join_date='2001-01-01')
        
        # list results
        response = None
        response = self.client.get(self.api_end_point)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)

        # filter - progenitor
        response = None
        response = self.client.get(self.api_end_point+'?progenitor=organization:1')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)

        # filter - join date exact
        response = None
        response = self.client.get(self.api_end_point+'?join_date=2001-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)

        # filter - join date gt
        response = None
        response = self.client.get(self.api_end_point+'?join_date__gt=2001-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)        

        response = None
        response = self.client.get(self.api_end_point+'?join_date__gt=2000-12-31')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4) 

        # filter - join date lt
        response = None
        response = self.client.get(self.api_end_point+'?join_date__lt=2001-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)        

        response = None
        response = self.client.get(self.api_end_point+'?join_date__lt=2000-01-02')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)   

        # filter - birthday exact
        response = None
        response = self.client.get(self.api_end_point+'?person__birthday=1980-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        # filter - birthday_gt
        response = None
        response = self.client.get(self.api_end_point+'?person__birthday__gt=1985-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)        

        response = None
        response = self.client.get(self.api_end_point+'?person__birthday__gt=2000-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0) 

        # filter - birthday_lt
        response = None
        response = self.client.get(self.api_end_point+'?person__birthday__lt=1985-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)        

        response = None
        response = self.client.get(self.api_end_point+'?person__birthday__lt=1969-04-11')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)    

        # filter - title
        response = None
        response = self.client.get(self.api_end_point+'?person__title=Mr.')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)   

        response = None
        response = self.client.get(self.api_end_point+'?person__title=Dr.')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        response = None
        response = self.client.get(self.api_end_point+'?person__title=Miss')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)                     

        # filter - gender
        response = None
        response = self.client.get(self.api_end_point+'?person__gender=m')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 3)   

        response = None
        response = self.client.get(self.api_end_point+'?person__gender=f')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        # filter - first_name
        response = None
        response = self.client.get(self.api_end_point+'?person__first_name=Ben')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        response = None
        response = self.client.get(self.api_end_point+'?person__first_name=ben')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        # filter - last_name
        response = None
        response = self.client.get(self.api_end_point+'?person__last_name=Grimm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        response = None
        response = self.client.get(self.api_end_point+'?person__last_name=Storm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2) 

        response = None
        response = self.client.get(self.api_end_point+'?person__last_name=storm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)      


