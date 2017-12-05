from agape import viewsets

from .models import Member, MemberFilter
from .serializers import MemberSerializer

from django_filters import rest_framework as filters


class MemberViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for people.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Member.objects.all()
	serializer_class = MemberSerializer
	context = 'member'

	filter_backends = (filters.DjangoFilterBackend,)
	filter_class = MemberFilter


