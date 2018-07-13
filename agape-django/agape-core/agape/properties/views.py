from agape import viewsets
from rest_framework import status
from rest_framework.filters import OrderingFilter

from .models import Property, PropertyFilter, Room, RoomType
from .serializers import PropertySerializer, RoomSerializer, RoomTypeSerializer

from django_filters import rest_framework as filters
from rest_framework.response import Response


class PropertyViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for property

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Property.objects.all()
	serializer_class = PropertySerializer
	context = 'property'

	filter_backends = (filters.DjangoFilterBackend,OrderingFilter)
	filter_class = PropertyFilter



class RoomViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for room

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Room.objects.all()
	serializer_class = RoomSerializer
	context = 'room'

	filter_backends = (filters.DjangoFilterBackend,OrderingFilter)
	# filter_class = RoomFilter
	# 
	# 

class RoomTypeViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for room

	Extends:
		viewset.ModelViewSet

	"""

	queryset = RoomType.objects.all()
	serializer_class = RoomTypeSerializer
	context = 'room-type'

	filter_backends = (filters.DjangoFilterBackend,OrderingFilter)
	# filter_class = RoomFilter


