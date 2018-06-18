
from agape.signals import on
from .models import Contact
from .serializers import ContactSerializer

class ContactsConnector():

	app = 'agape.contacts'


	def to(self,target_app):
		""" Connect the contacts application to another application.
			
			connect = ContactsConnector()
			connect.to('agape.people')
		"""

		self.connect(target_app)

	def connect(self,target_app):
		if target_app == 'agape.people':
			self.connect_to_entity('person')

		elif target_app == 'agape.organizations':
			self.connnect_to_entity('organizations')


	def connect_to_entity(self, entity):
		self.connect_to_create_instance(entity)


	def connect_to_create_instance(self, entity):
		""" Create new contact records when creating a new instance of given entity.
		"""

		# scope variable is shared between callbacks
		scope = {}

		# catch the incoming data to use after entity instance is created
		def catch_incoming_data(o,data):

			scope['contactData'] = None

			if 'contacts' in data:
				scope['contactData'] = data.pop('contacts',[])


		# create contacts from given data and associate with entity instance
		def create_contacts(o,instance):

			for contact in scope['contactData']:
			    contact['progenitor'] = instance.moniker()

			serializer = ContactSerializer(data=scope['contactData'], many=True)
			if serializer.is_valid():
			    recordSet = serializer.save()

		# register callbacks
		on(entity+'.create:before',catch_incoming_data)
		on(entity+'.create:success',create_contacts) 

	def connect_to_delete_instance(entity):

    	# scope variable is shared between callbacks
		scope = {}

		def before(o,instance):
			scope['query'] = Contacts.objects.filter(progenitor=instance.moniker())

		def delete_contacts(o,instance):
			scope['query'].delete()

		on(entity+'.delete:before',before)
		on(entity+'.delete:success',delete_contacts)


