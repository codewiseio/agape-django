
from agape.signals import on
from .models import Member
from .serializers import MemberSerializer


class MembersConnector():

	app = 'agape.members'
	model = Member


	def to(self,target_app):
		self.connect(target_app)


	def connect(self,target_app):

		if target_app == 'agape.organizations':
			self.connnect_to_entity('organizations')

		elif target_app == 'agape.groups':
			self.connect_to_entity('groups')


	def connect_to_entity(self, entity):
		self.connect_to_create_instance(entity)


	def connect_to_create_instance(self, entity):
		""" Create new contact records when creating a new instance of given entity.
		"""

		# scope variable is shared between callbacks
		scope = {}

		# catch the incoming data to use after entity instance is created
		def catch_incoming_data(o,data):
			scope = {}
			scope['memberData'] = None

			if 'members' in data:
				scope['membertData'] = data.pop('members',[])

		# create contacts from given data and associate with entity instance
		def create_members(o,instance):

			members = []

			for personId in scope['memberData']:
				member = { 'progenitor':instance.moniker(), 'person':personId}
				members.append(member)

			serializer = MemberSerializer(data=members, many=True)
			if serializer.is_valid():
			    recordSet = serializer.save()

		# register callbacks
		on(entity+'.create:before',catch_incoming_data)
		on(entity+'.create:success',create_contacts) 

	def connect_to_delete_instance(entity):

    	# scope variable is shared between callbacks
		scope = {}

		def before(o,instance):
			scope['query'] = Member.objects.filter(progenitor=instance.moniker())

		def delete_children(o,instance):
			scope['query'].delete()

		on(entity+'.delete:before',before)
		on(entity+'.delete:success',delete_children)


