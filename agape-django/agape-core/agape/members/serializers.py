from rest_framework import serializers

from .models import Member
from agape.people.models import Person
from agape.people.serializers import PersonSerializer

class MemberSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()
	person_id = serializers.IntegerField()
	join_date = serializers.DateTimeField(required=False)
	person = PersonSerializer(required=False)


	class Meta:
		model = Member

		fields = ('id', 'moniker', 'progenitor', 'person','person_id','role', 'involvement', 'join_date')

		read_only_fields = ['id','moniker','person']



