from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import APIClient

class APITestCase(TestCase):

	def setUp(self):
		self.client =  APIClient()
		self.api_end_point = '/api/v1'	

	def test_register_organization(self):
		data = {
			'email':'test@example.com',
			'password':'password',
			'organization': {
				'name':'Acme Rental Company',
				'description':'Providing the the finest vacation rentals to Looney Toons nation wide.'
			},
			'person': {
				'first_name': "Bugs",
				'last_name': "Bunny"
			}
		}

		# register with the provided data
		response = self.client.post(self.api_end_point+'/users/', data)
		self.assertEqual(response.status_code, 201, "Created new user")

		# test user was created
		userid = response.data['id']
		self.assertTrue(userid, "Created new user")
		
		# test organization was created
		response = self.client.get(self.api_end_point+'/organizations/1/')
		self.assertEqual(response.status_code, 201, "Created new organization")
		
		# test organization contact information
		
		# test that a person was created

		# test person contact information

	def test_register_general_user(self):
		pass

