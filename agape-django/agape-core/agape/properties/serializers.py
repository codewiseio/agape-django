from rest_framework import serializers

from .models import Property, Room, RoomType

class PropertySerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Property

		fields = ('id', 'name', 'abbreviation', 'description')

		read_only_fields = ['id','progenitor']


class RoomSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = Room

		fields = ('id', 'name', 'number', 'property', 'room_type')

		read_only_fields = ['id','progenitor']


class RoomTypeSerializer(serializers.ModelSerializer):

	id = serializers.ReadOnlyField()

	class Meta:
		model = RoomType

		fields = ('id', 'label','abbreviation','description','occupancy')

		read_only_fields = ['id','progenitor']
