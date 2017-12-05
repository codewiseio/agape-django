from rest_framework import serializers

from .models import Organization

class OrganizationSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Organization

		fields = ('id', 'name','slug')

		read_only_fields = ['id']

