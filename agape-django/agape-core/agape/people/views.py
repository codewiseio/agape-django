from agape import viewsets

from .models import Person, PersonFilter
from .serializers import PersonSerializer

from django_filters import rest_framework as filters


class PersonViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for people.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Person.objects.all()
	serializer_class = PersonSerializer
	context = 'person'

	filter_backends = (filters.DjangoFilterBackend,)
	filter_class = PersonFilter
