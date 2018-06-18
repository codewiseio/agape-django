from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

from agape.signals import on

import json
from django.utils import timezone
from datetime import timedelta
import datetime

# Create your tests here.
from .models import Person
from .serializers import PersonSerializer
# from .settings import AUTHENTICATION
# 

MODEL = Person
SERIALIZER_CLASS = PersonSerializer
CREATE_DATA =  {   
        'first_name':'Elvis',
        'middle_name':'Aaron',
        'last_name':'Presley',
        'birthday': datetime.date(1935, 1, 8),
        'gender': 'm'
    }
EXPECT_DATA = {   
    'id':1,
    'first_name':'Elvis',
    'middle_name':'Aaron',
    'last_name':'Presley',
    'birthday': datetime.date(1935, 1, 8),
    'gender': 'm',
    'title': None
}
SERIALIZED_EXPECT_DATA = EXPECT_DATA.copy()
SERIALIZED_EXPECT_DATA['birthday'] = EXPECT_DATA['birthday'].strftime('%Y-%m-%d')

UPDATE_DATA = { 
    'title': 'Mr.'
}
UPDATE_EXPECT_DATA= {   
    'id':1,
    'first_name':'Elvis',
    'middle_name':'Aaron',
    'last_name':'Presley',
    'birthday': datetime.date(1935, 1, 8),
    'gender': 'm',
    'title': 'Mr.'
}
UPDATE_SERIALIZED_EXPECT_DATA = UPDATE_EXPECT_DATA.copy()
UPDATE_SERIALIZED_EXPECT_DATA['birthday'] = UPDATE_EXPECT_DATA['birthday'].strftime('%Y-%m-%d')


class PersonTestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA
        self.expect_data        = EXPECT_DATA
        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_EXPECT_DATA

    def test_create(self):
        instance = self.model(**self.create_data)
        instance.save()

        # compare instance to expected data
        for key in self.expect_data.keys():
            instance_value = getattr(instance, key)
            expected_value = self.expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

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



class PersonSerializerTestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA.copy()
        self.create_data['birthday'] ='1935-01-08'

        self.expect_data        = EXPECT_DATA.copy()

        self.instance_expect_data = EXPECT_DATA.copy()
        self.serialized_expect_data = SERIALIZED_EXPECT_DATA.copy()

        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_SERIALIZED_EXPECT_DATA.copy()
        self.update_expect_data['birthday'] ='1935-01-08'

    def test_serialize(self):
        instance =self.model(**self.create_data)
        instance.save()

        serializer = self.serializer_class(instance)
        self.assertDictEqual(self.serialized_expect_data, serializer.data)

    def test_create(self):

        # serializer data is valid
        serializer = self.serializer_class(data=self.create_data)
        self.assertTrue(serializer.is_valid(), 'Serializer data is valid')

        # create an instance via the serializer
        instance = serializer.create(serializer.validated_data)
        self.assertTrue(instance, 'Created instance from serializer data')

        # compare instance to expected data
        for key in self.instance_expect_data.keys():
            instance_value = getattr(instance, key)

            # if instance value is date, convert to YMD
            expected_value = self.instance_expect_data[key]
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

    def test_update(self):
        instance =self.model(**self.create_data)
        instance.save()

        serializer = self.serializer_class(instance,data=self.update_data,partial=True)
        self.assertTrue(serializer.is_valid(raise_exception=True), 'Serializer data is valid')

        instance = serializer.update(instance, serializer.validated_data)

        # compare instance to expected data
        for key, expected_value in self.update_expect_data.items():
            instance_value = getattr(instance, key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )



class APITestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA.copy()

        self.expect_data        = EXPECT_DATA.copy()

        self.instance_expect_data = EXPECT_DATA.copy()
        self.serialized_expect_data = SERIALIZED_EXPECT_DATA.copy()

        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_SERIALIZED_EXPECT_DATA.copy()

        self.client =  APIClient()
        self.entity = 'person'
        self.api_end_point = '/api/v1/people/'

    def test_create(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        # compare response to expected data
        for key, expected_value in self.serialized_expect_data.items():
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
        for key, expected_value in self.serialized_expect_data.items():
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

        # create people
        data = [
            {'title': 'Mr.', 'first_name':'Ben'     , 'last_name':'Grimm'   , 'birthday': '1980-01-01', 'gender':'m'},
            {'title': 'Mr.', 'first_name':'Johnny'  , 'last_name':'Storm'   , 'birthday': '1990-07-11', 'gender':'m'},
            {'title': 'Miss', 'first_name':'Sue'    , 'last_name':'Storm'   , 'birthday': '1989-12-28', 'gender':'f'},
            {'title': 'Dr.', 'first_name':'Reed'    , 'last_name':'Richards', 'birthday': '1969-04-11', 'gender':'m'}
        ]
        for idata in data:
            person = Person.objects.create(**idata )

        # list results
        response = None
        response = self.client.get(self.api_end_point)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)

        # filter - birthday exact
        response = None
        response = self.client.get(self.api_end_point+'?birthday=1980-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        # filter - birthday_gt
        response = None
        response = self.client.get(self.api_end_point+'?birthday__gt=1985-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)        

        response = None
        response = self.client.get(self.api_end_point+'?birthday__gt=2000-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0) 

        # filter - birthday_lt
        response = None
        response = self.client.get(self.api_end_point+'?birthday__lt=1985-01-01')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)        

        response = None
        response = self.client.get(self.api_end_point+'?birthday__lt=1969-04-11')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 0)    

        # filter - title
        response = None
        response = self.client.get(self.api_end_point+'?title=Mr.')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2)   

        response = None
        response = self.client.get(self.api_end_point+'?title=Dr.')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        response = None
        response = self.client.get(self.api_end_point+'?title=Miss')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)                     

        # filter - gender
        response = None
        response = self.client.get(self.api_end_point+'?gender=m')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 3)   

        response = None
        response = self.client.get(self.api_end_point+'?gender=f')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)

        # filter - first_name
        response = None
        response = self.client.get(self.api_end_point+'?first_name=Ben')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        response = None
        response = self.client.get(self.api_end_point+'?first_name=ben')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        # filter - last_name
        response = None
        response = self.client.get(self.api_end_point+'?last_name=Grimm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1) 

        response = None
        response = self.client.get(self.api_end_point+'?last_name=Storm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2) 

        response = None
        response = self.client.get(self.api_end_point+'?last_name=storm')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 2) 


    def test_signals(self):

        scope = {}

        def on_create_before(self,data):
            scope['on_create_before'] = True

        def on_create_success(self,instance):
            scope['on_create_success'] = True

        def on_retrieve_before(self,data):
            scope['on_retrieve_before'] = True

        def on_retrieve_success(self,instance):
            scope['on_retrieve_success'] = True

        def on_update_before(self,data):
            scope['on_update_before'] = True

        def on_update_success(self,instance):
            scope['on_update_success'] = True

        def on_destroy_before(self,data):
            scope['on_destroy_before'] = True

        def on_destroy_success(self,instance):
            scope['on_destroy_success'] = True

        on(self.entity + '.create:before',      on_create_before)
        on(self.entity + '.create:success',     on_create_success)
        on(self.entity + '.retrieve:before',    on_retrieve_before)
        on(self.entity + '.retrieve:success',   on_retrieve_success)
        on(self.entity + '.update:before',      on_update_before)
        on(self.entity + '.update:success',     on_update_success)
        on(self.entity + '.destroy:before',      on_destroy_before)
        on(self.entity + '.destroy:success',     on_destroy_success)

        # create new record
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 201, "Created new instance")

        self.assertTrue(scope['on_create_before'], '.create:before')
        self.assertTrue(scope['on_create_success'], '.create:before')

        # rerieve the record
        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)
        response = self.client.get(uri)
        self.assertEqual(response.status_code, 200, "Retrieved")

        self.assertTrue(scope['on_retrieve_before'], '.retrieve:before')
        self.assertTrue(scope['on_retrieve_success'], '.retrieve:success')


        # update a record
        response = self.client.patch(uri, json.dumps(self.update_data), content_type='application/json')
        self.assertEqual(response.status_code, 200, "Updated instance")

        self.assertTrue(scope['on_update_before'], '.update:before')
        self.assertTrue(scope['on_update_success'], '.update:before')

        # destroy
        response = self.client.delete( uri )    
        self.assertEqual(response.status_code, 204, "Destroyd")

        self.assertTrue(scope['on_destroy_before'], '.destroy:before')
        self.assertTrue(scope['on_destroy_success'], '.destroy:before')
       

