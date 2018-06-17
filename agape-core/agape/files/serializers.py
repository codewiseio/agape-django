from rest_framework import serializers

from .models import File

class FileSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = File

		fields = ('id', 'progenitor', 'name', 'type' , 'path', 'label', 'description')

		read_only_fields = ['id']