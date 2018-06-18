from rest_framework import serializers

from .models import Event

class EventSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Event

		fields = ('id', 'moniker', 'progenitor', 'name', 'description', 'start_time', 'end_time')

		read_only_fields = ['id']



