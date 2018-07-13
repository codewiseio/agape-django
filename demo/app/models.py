


from agape.signals import on
from agape.organizations.models import Organization
from agape.organizations.serializers import OrganizationSerializer

scope = {}

def on_user_create_before(event,data):

	print('CREATE BEFORE')

	scope['organization_data'] = data.pop('organization',None)
	scope['person_data'] = data.pop('person_data',None)

def on_user_create_success(event,user,*args,**kwargs):

	# create an organization
	if scope.get('organization_data'):
		data = scope.get('organization_data')
		serializer = OrganizationSerializer(data=data)
		serializer.is_valid(raise_exception=True)
		scope['organization'] = serializer.save()

	print('CREATE SUCCESS')
	
	# give this person all privileges on organization
	# from guardian.shortcuts import assign_perm
	
	# # assign_perm('view_organization', user, scope['organization'])
	# assign_perm('change_organization', user, scope['organization'])
	# assign_perm('delete_organization', user, scope['organization'])

on('user.create:before',on_user_create_before)
on('user.create:success',on_user_create_success)

