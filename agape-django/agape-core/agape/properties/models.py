from django.db import models
import random
import string
from django.conf import settings

from datetime import datetime
from django_filters import rest_framework as filters

class Property (models.Model):

    entity = 'property'

    progenitor   = models.CharField(max_length=64,null=True,blank=True)
    name         = models.CharField(max_length=64,null=False,blank=False)
    abbreviation = models.CharField(max_length=64,null=True,blank=True)

    description = models.TextField(null=True,blank=True)

    def __str__(self):
        return '<{} {}>'.format(self.moniker(), self.name)

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)


class PropertyFilter(filters.FilterSet):

    name         = filters.CharFilter(lookup_expr='icontains')
    abbreviation = filters.CharFilter(lookup_expr='icontains')
    description  = filters.CharFilter(lookup_expr='icontains')


    class Meta:
        model = Property
        fields = {
            'progenitor': ['exact']
        }


class RoomType(models.Model):

    entity = 'room-type'

    label        = models.CharField(max_length=32,null=False,blank=False)
    abbreviation = models.CharField(max_length=32,null=True, blank=True)
    description  = models.TextField(null=True,blank=True)
    occupancy    = models.IntegerField(null=True,blank=True)

    def __str__(self):
        return '<{} {}>'.format(self.moniker(), self.label)

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

class Room (models.Model):

    entity = 'room'

    property    = models.ForeignKey(Property, on_delete=models.CASCADE,null=False,blank=False)
    number      = models.CharField(max_length=12,null=True,blank=True)
    name        = models.CharField(max_length=64,null=True,blank=True)
    room_type   = models.ForeignKey(RoomType, on_delete=models.PROTECT,null=True,blank=True)
    description = models.TextField(null=True,blank=True)

    def __str__(self):
        return '<{} {}>'.format(self.moniker(), self.name)

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)
