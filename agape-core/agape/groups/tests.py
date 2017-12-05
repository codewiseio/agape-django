
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
from .models import Group
from .serializers import GroupSerializer


MODEL = Group
SERIALIZER_CLASS = GroupSerializer
CREATE_DATA =  {   
        'name':'Blue Man Group',
        'description': 'Create the ultimate dance party.'
    }
EXPECT_DATA = {   
    'id':1,
    'name':'Blue Man Group',
    'description': 'Create the ultimate dance party.',
    'progenitor': None,
    'status':0
}

UPDATE_DATA = { 
    'description': 'I am that I am.'
}
UPDATE_EXPECT_DATA= {   
    'id':1,
    'name':'Blue Man Group',
    'description': 'I am that I am.'
}

class ModelTestCase(TestCase):

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



class SerializerTestCase(TestCase):

    def setUp(self):
        self.model              = MODEL
        self.serializer_class   = SERIALIZER_CLASS
        self.create_data        = CREATE_DATA
        self.expect_data        = EXPECT_DATA
        self.update_data        = UPDATE_DATA
        self.update_expect_data = UPDATE_EXPECT_DATA

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

        serializer = self.serializer_class(data=self.update_data)
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
        self.update_expect_data = UPDATE_EXPECT_DATA

        self.client =  APIClient()
        self.entity = 'group'
        self.api_end_point = '/api/v1/groups/'

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


# class OrganizationGroupsTestCase(TestCase):

#     def setup():
#         pass

#     def 