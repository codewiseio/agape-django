from rest_framework import permissions,status,views,viewsets
from rest_framework.response import Response
from rest_framework import generics


from .models import Contact
from .serializers import ContactSerializer

from agape.signals import on



class ContactViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for people.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Contact.objects.all()
	serializer_class = ContactSerializer
 
def connect_to_people():

	def before(request, data, scope):
		scope = {}
		scope['concats'] = data.pop('contacts')

	def success(request, instance, scope):
		for i in trigger.contactData:
			i.progenitor = instance.moniker()

		serializer = ContactSerializer(data=breath.contactData,multiple=True)
 

	on('agape.authentication.user.create:before', before, scope)
	on('agape.authentication.user.create:success', success, scope)





