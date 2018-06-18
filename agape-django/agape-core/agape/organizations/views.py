from agape import viewsets

from .models import Organization
from .serializers import OrganizationSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
	""" Viewset that provides CRUD operations for organization.

	Extends:
		viewset.ModelViewSet

	"""

	queryset = Organization.objects.all()
	serializer_class = OrganizationSerializer
	context = 'organization'



