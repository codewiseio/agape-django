from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

import json
from django.core.files.uploadedfile import SimpleUploadedFile
from django.conf import settings
from django.utils import timezone
from datetime import timedelta

import os.path
import shutil

# Create your tests here.
from .models import File
from .serializers import FileSerializer

from agape.people.models import Person
from agape.people.serializers import PersonSerializer

from agape.signals import on


MODEL = File
SERIALIZER_CLASS = FileSerializer
CREATE_DATA =  {   
        'name': 'blue-man-file.pdf',
        'type': 'pdf',
        'path': 'aso0w98we098ds09.pdf',

        'label': 'Blue Man File',
        'description': 'Guide to creating the perfect person.',

    }
EXPECT_DATA = {   
    'id':1,
    'progenitor': None,
    'name': 'blue-man-file.pdf',
    'type': 'pdf',
    'path': 'aso0w98we098ds09.pdf',

    'label': 'Blue Man File',
    'description': 'Guide to creating the perfect person.',
    }

UPDATE_DATA = { 
    'description': 'I am that I am.'
}
UPDATE_EXPECT_DATA= {   
    'id':1,
    'label':'Blue Man File',
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

        self.create_data        = CREATE_DATA.copy()
        del self.create_data['path']
        self.create_data['file'] =  SimpleUploadedFile("file.mp4", b"file_content", content_type="video/mp4")

        self.expect_data        = EXPECT_DATA.copy()
        del self.expect_data['path']
        self.update_data        = UPDATE_DATA.copy()

        self.update_expect_data = UPDATE_EXPECT_DATA

        self.client =  APIClient()
        self.entity = 'group'
        self.api_end_point = '/api/v1/files/'

    def test_no_file_supplied(self):
        response = self.client.post(self.api_end_point, self.create_data)
        self.assertEqual(response.status_code, 400, "Created new instance")


    def test_create(self):
        response = self.client.post(self.api_end_point, self.create_data, format='multipart')
        self.assertEqual(response.status_code, 201, "Created new instance")

        # compare response to expected data
        for key, expected_value in self.expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        # verify actual database record was created
        instance = self.model.objects.get(id=response.data.get('id'))
        self.assertTrue(instance)

        # verify that the uploaded file exists on disk
        self.assertTrue(os.path.isfile(instance.full_path()));

    def test_retrieve(self):
        response = self.client.post(self.api_end_point, self.create_data, format='multipart')
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

    def test_download(self):
        response = self.client.post(self.api_end_point, self.create_data, format='multipart')
        self.assertEqual(response.status_code, 201, "Created new instance")

        # TODO: Test file download

        instance_id = response.data.get('id')
        uri = "{}{}/".format(self.api_end_point,instance_id)
        print(uri)

        response = self.client.get(uri)

        self.assertEqual(response.status_code, 200, "Created new instance")


    def test_update(self):
        response = self.client.post(self.api_end_point, self.create_data, format='multipart')
        self.assertEqual(response.status_code, 201, "Created new instance")

        instance_id = response.data.get('id')
        original_instance = File.objects.get(id=instance_id)
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = self.client.patch(uri, json.dumps(self.update_data), content_type='application/json')
        self.assertEqual(response.status_code, 200, "Updated instance")

        # validate response
        for key, expected_value in self.update_expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        # perform get operation and validate
        instance_id = response.data.get('id')
        instance = File.objects.get(id=instance_id)
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = None
        response = self.client.get(uri)

        # compare response to expected data
        for key, expected_value in self.update_expect_data.items():
            instance_value = response.data.get(key)
            self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

        # self.assertTrue(original_instance.path != instance.path )

    def test_delete(self):
        response = self.client.post(self.api_end_point, self.create_data, format='multipart')
        self.assertEqual(response.status_code, 201, "Created new instance")


        instance_id = response.data.get('id')
        instance = File.objects.get(id=instance_id)
        uri = "{}{}/".format(self.api_end_point,instance_id)

        response = self.client.delete( uri )    
        self.assertEqual(response.status_code, 204, "Deleted")

        query = self.model.objects.filter(id=instance_id)
        self.assertEqual(len(query),0, "Deleted")

        # verify that the uploaded file exists on disk
        self.assertTrue(not os.path.isfile(instance.full_path()));

    def tearDown(self):
        if (os.path.isdir(settings.MEDIA_ROOT)):
            shutil.rmtree(settings.MEDIA_ROOT)
