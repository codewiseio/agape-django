from agape import viewsets

from .models import Group
from .serializers import GroupSerializer


class GroupViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for people.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Group.objects.all()
	serializer_class = GroupSerializer
	context = 'group'

