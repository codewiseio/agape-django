
from agape.organizations.views import OrganizationViewsSet 
from rest_framework import permissions

class IsAccountOwner(permissions.BasePermission):
	
    def has_object_permissions(self,request,view,account):
        if request.user:
            return account == request.user
        return False
    


class DemoOrganizationViewSet( OrganizationViewsSet ):

	queryset = Organization.objects.all()
	serializer_class = OrganizationSerializer
	context = 'organization'



