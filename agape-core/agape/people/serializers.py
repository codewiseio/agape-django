from rest_framework import serializers

from .models import Person

class PersonSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Person

		fields = ('id', 'title', 'first_name', 'middle_name', 'last_name', 'gender', 'birthday')

		read_only_fields = ['id']

