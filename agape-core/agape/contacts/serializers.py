from rest_framework import serializers

from .models import Contact

class ContactSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Contact

		fields = ('id', 'progenitor', 'label', 'type', 'value' )

		read_only_fields = ['id']