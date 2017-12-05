from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

import json
from django.utils import timezone
from datetime import timedelta

# Create your tests here.
from .models import Organization
from .serializers import OrganizationSerializer


class OrganizationTestCase(TestCase):

    def setUp(self):
        self.create_data = { 'name': 'Umbrella Corporation' }
        self.expect_data = { 'id': 1, 'name': 'Umbrella Corporation', 'slug':'umbrella-corporation'}
        
        self.update_data = { 'name': 'Umbrella Foundation'}
        self.update_expect_data = {'name': 'Umbrella Foundation'}

        self.model = Organization
        self.serializer_class = OrganizationSerializer

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

    def test_slug_user_supplied(self):
        instance = self.model(name="Umbrella Corporation", slug="umbrella-corp")
        instance.save()

        # test slug
        self.assertEqual(instance.slug, "umbrella-corp")

        # incorrectly formatted slug
        instance = Organization(name="First World Charity", slug="first world charity")
        instance.save()

        # test slug
        self.assertEqual(instance.slug, "first-world-charity")        

    def test_slug_duplicates(self):
        instance = Organization(name="Umbrella Corporation")
        instance.save()

        # first slug
        self.assertEqual(instance.slug, "umbrella-corporation")

        # second slug
        duplicate = Organization(name="Umbrella Corporation")
        duplicate.save()

        self.assertEqual(duplicate.slug, "umbrella-corporation-2")

        # third duplicate with correct integer suffix
        duplicate = Organization(name="Umbrella Corporation", slug="umbrella-corporation-2")
        duplicate.save()

        self.assertEqual(duplicate.slug, "umbrella-corporation-3")

    def test_slug_no_duplicate_renamed_on_update(self):
        """ ensure that when updating an object the slug is not falsely
        identified as a duplicate. """

        instance = Organization(name="Umbrella Corporation")
        instance.save()
        self.assertEqual(instance.slug, "umbrella-corporation")

        instance.save()
        self.assertEqual(instance.slug, "umbrella-corporation")



class OrganizationSerializerTestCase(TestCase):

    def setUp(self):
        self.create_data = { 'name': 'Umbrella Corporation' }
        self.expect_data = { 'id': 1, 'name': 'Umbrella Corporation', 'slug':'umbrella-corporation'}
        
        self.update_data = { 'name': 'Umbrella Foundation'}
        self.update_expect_data = {'name': 'Umbrella Foundation'}

        self.model = Organization
        self.serializer_class = OrganizationSerializer

    def test_serialize(self):
        instance =self.model(**self.create_data)
        instance.save()

        serializer = self.serializer_class(instance)
        self.assertDictEqual(self.expect_data, serializer.data)

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
        self.client =  APIClient()
        self.api_end_point = '/api/v1/organizations/'
        self.create_data = { 'name': 'Umbrella Corporation' }
        self.expect_data = { 'id': 1, 'name': 'Umbrella Corporation', 'slug':'umbrella-corporation'}
        
        self.update_data = { 'name': 'Umbrella Foundation'}
        self.update_expect_data = {'name': 'Umbrella Foundation'}

        self.model = Organization
        self.serializer_class = OrganizationSerializer

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




