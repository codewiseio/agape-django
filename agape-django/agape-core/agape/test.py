from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient


import json
from django.utils import timezone
from datetime import timedelta
import datetime



class AgapeTests(object):

    def create_requisite_objects(self,model,data):

        i = 0
        while i < len(data):
            instance = model(**data[i])
            instance.save()
            i+=1


    def transform_data_to_serialized_data(self, data):
        
        serialized_data = []

        for record in data:

            serialized_record = {}
            
            # for each item in create data
            for key, value in record.items():

                # if the key ends in id, remove the _id portion
                if key.endswith('_id'):
                    key =  key[:-3]
                    serialized_record[key] = value

                # if it is a datetime object
                elif isinstance(value, datetime.datetime):
                    # format as a datetime string
                    serialized_record[key] = value.strftime('%Y-%m-%dT%H:%M:%S')

                # if it is a date object
                elif isinstance(value,datetime.date):
                     # format as a date string
                    serialized_record[key] = value.strftime('%Y-%m-%d')

                else:
                    serialized_record[key] = value

            serialized_data.append(serialized_record)

        return serialized_data






class ModelTests(AgapeTests):
     

    def test_create(self):

        i = 0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()

            # compare instance to expected data
            for key in self.expect_data[i].keys():
                instance_value = getattr(instance, key)
                expected_value = self.expect_data[i][key]
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )
            i+=1


    def test_retrieve(self):
        i = 0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()
            instance = None

            instance = self.model.objects.get(id=i+1)
            self.assertTrue(instance)
        
            # compare instance to expected data
            for key in self.expect_data[i].keys():
                instance_value = getattr(instance, key)
                expected_value = self.expect_data[i][key]
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )
            i+=1

    def test_update(self):

        i=0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()

            # if there is update data for this record, apply it and check it
            if len(self.update_data) > i and self.update_data[i] != None:

                # update the instance
                for key, value in self.update_data[i].items():
                    instance_value = setattr(instance, key, value )

                # save the instance
                instance.save()

                # retrieve the instance
                instance_id = instance.id
                instance = None
                instance = self.model.objects.get(id=instance_id)
            

            
                # compare instance to expected data
                for key in self.update_expect_data[i].keys():
                    instance_value = getattr(instance, key)
                    expected_value = self.update_expect_data[i][key]
                    self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

            i+=1

    def test_delete(self):

        i=0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()
            
            # retrieve the instance
            instance_id = instance.id
            instance = None
            instance = self.model.objects.get(id=instance_id)
            self.assertTrue(instance)

            # delete the instance
            self.model.objects.filter(id=instance_id).delete()
        

            instance = self.model.objects.filter(id=instance_id).all()
            self.assertTrue(not instance)


            i+=1


    def test_list(self):

        i=0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()
            i+=1

        list = self.model.objects.all()
        self.assertEqual(len(list),len(self.create_data))




class SerializerTests(AgapeTests):

    def setUp(self):
        self.maxDiff = None


    def test_serialize(self):

        i=0
        while i < len(self.create_data):
            instance = self.model(**self.create_data[i])
            instance.save()

            serializer = self.serializer_class(instance)

            # compare instance to expected data
            for key in self.serialized_expect_data[i].keys():
                instance_value = serializer.data.get(key)
                expected_value = self.serialized_expect_data[i][key]
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )
            i+=1

    def test_create(self):

        i=0
        while i < len(self.create_data):

            # serializer data is valid
            serializer = self.serializer_class(data=self.serialized_create_data[i])
            self.assertTrue(serializer.is_valid(), 'Serializer data is valid')

            # create an instance via the serializer
            instance = serializer.create(serializer.validated_data)
            self.assertTrue(instance, 'Created instance from serializer data')

            i+=1


    def test_update(self):

        i=0
        while i < len(self.create_data):

            instance =self.model(**self.create_data[i])
            instance.save()

            # if there is an update for this record, apply it and check it
            if len(self.serialized_update_data) > i and self.serialized_update_data[i] != None:

                serializer = self.serializer_class(instance,data=self.serialized_update_data[i],partial=True)
                self.assertTrue(serializer.is_valid(raise_exception=True), 'Serializer data is valid')

                instance = serializer.update(instance, serializer.validated_data)

            i+=1
        

class ApiTests(AgapeTests):

    def setUp(self):
        self.maxDiff = None
        self.client =  APIClient()

    def test_create(self):

        i=0
        while i < len(self.create_data):

            response = self.client.post(self.api_end_point, self.create_data[i])
            try:
                self.assertEqual(response.status_code, 201, "Created new instance")
            except Exception as e:
                print(response.data)
                raise e


            # compare response to expected data
            for key, expected_value in self.expect_data[i].items():
                instance_value = response.data.get(key)
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

            # verify actual database record was created
            instance = self.model.objects.get(id=response.data.get('id'))
            self.assertTrue(instance)

            i+=1

    def test_retrieve(self):

        i=0
        while i < len(self.create_data):

            # create the item to retrieve
            response = self.client.post(self.api_end_point, self.create_data[i])
            self.assertEqual(response.status_code, 201, "Created new instance")

            # remember the item id
            instance_id = response.data.get('id')
            response = None

            # retrieve the item via the api endpoint
            uri = "{}{}/".format(self.api_end_point,instance_id)
            response = self.client.get(uri)
            self.assertEqual(response.status_code, 200, "Retrieved")

            # compare response to expected data
            for key, expected_value in self.expect_data[i].items():
                instance_value = response.data.get(key)
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )

            i+=1


    def test_update(self):

        i=0
        while i < len(self.update_data):

            # create the item to test
            response = self.client.post(self.api_end_point, self.create_data[i])
            self.assertEqual(response.status_code, 201, "Created new instance")

            # remember the item id
            instance_id = response.data.get('id')
            response = None

            # perform the update via the api endpoint
            uri = "{}{}/".format(self.api_end_point,instance_id)
            response = self.client.patch(uri, json.dumps(self.update_data[i]), content_type='application/json')
            self.assertEqual(response.status_code, 200, "Updated instance")

            # retrieve the item via the api endpoint
            response = None
            response = self.client.get(uri)

            # compare response to expected data
            for key, expected_value in self.update_expect_data[i].items():
                instance_value = response.data.get(key)
                self.assertEqual(instance_value, expected_value, "Comparing {} attribute".format(key) )


            i+=1

    def test_delete(self):

        i=0
        while i < len(self.create_data):

            # create the item to test
            response = self.client.post(self.api_end_point, self.create_data[i])
            self.assertEqual(response.status_code, 201, "Created new instance")

            # remember the item id
            instance_id = response.data.get('id')
            response = None

            # perform delete via the api endpoint
            uri = "{}{}/".format(self.api_end_point,instance_id)
            response = self.client.delete( uri )    
            self.assertEqual(response.status_code, 204, "Deleted instance")

            # retrieve the item via the api endpoint
            response = None
            response = self.client.get(uri)
            self.assertEqual(response.status_code, 404, "Instance not found")


            i+=1

    def test_list(self):

        i=0
        while i < len(self.create_data):

            # create the item to test
            response = self.client.post(self.api_end_point, self.create_data[i])
            self.assertEqual(response.status_code, 201, "Created new instance")

            i+=1

        response = None
        response = self.client.get(self.api_end_point)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), len(self.create_data))         


