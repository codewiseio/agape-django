from agape import viewsets

from .models import Event
from .serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for people.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Event.objects.all()
	serializer_class = EventSerializer
	context = 'event'

