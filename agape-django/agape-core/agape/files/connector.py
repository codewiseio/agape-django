
from agape.signals import on
from .models import File
from .serializers import FileSerializer

class FilesConnector():

	app = 'agape.files'


	def to(self,target_app):
		""" Connect the files application to another application.
			
			connect = FilesConnector()
			connect.to('agape.people')
		"""

		self.connect(target_app)

	def connect(self,target_app):
		if target_app == 'agape.groups':
			self.connect_to_entity('group')

	def connect_to_entity(self, entity):
		self.connect_to_delete_instance(entity)

	def connect_to_delete_instance(entity):

    	# scope variable is shared between callbacks
		scope = {}

		# get the moniker of the entity being deleted
		def before(o,instance):
			scope['query'] = Files.objects.filter(progenitor=instance.moniker())

		# delete all files associated with the moniker
		def delete_files(o,instance):
			scope['query'].delete()

		# attach signals
		on(entity+'.delete:before',before)
		on(entity+'.delete:success',delete_files)


