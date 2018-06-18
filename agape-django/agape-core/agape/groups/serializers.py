from rest_framework import serializers

from .models import Group

class GroupSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Group

		fields = ('id', 'moniker', 'progenitor', 'name', 'description', 'status')

		read_only_fields = ['id']



