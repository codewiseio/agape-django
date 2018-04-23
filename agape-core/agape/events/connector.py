
from agape.signals import on
from .models import Event
from .serializers import EventSerializer

class EventsConnector():

	app = 'agape.events'
	model = Event


	def to(self,target_app):
		self.connect(target_app)


	def connect(self,target_app):

		if target_app == 'agape.organizations':
			self.connnect_to_entity('organizations')


	def connect_to_entity(self, entity):
		self.connect_to_delete_instance(entity)


	def connect_to_delete_instance(entity):
		""" When an entity(e.g., an organization) is deleted, remove all of the associated events """

    	# scope variable is shared between callbacks
		scope = {}

		# find all the events associated with the entity
		def before(o,instance):
			scope['query'] = Event.objects.filter(progenitor=instance.moniker())

		# perform the delete operation
		def delete_children(o,instance):
			scope['query'].delete()

		# connect to the delete signals
		on(entity+'.delete:before',before)
		on(entity+'.delete:success',delete_children)


