from django.db import models
from agape.people.models import Person

# Create your models here.
class Event(models.Model):

    entity = 'event'

    progenitor       = models.CharField(max_length=64,null=True,blank=True)
    name             = models.CharField(max_length=255,null=True,blank=True)
    description      = models.TextField(null=True,blank=True)

    start_time       = models.DateTimeField(null=False,blank=False)
    end_time         = models.DateTimeField(null=False,blank=False)

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{} {} {}>'.format(self.moniker(), self.name)


class Attendee(models.Model):


    event        = models.ForeignKey(Event , on_delete=models.CASCADE, blank=False, null=False)
    person       = models.ForeignKey(Person, on_delete=models.CASCADE, blank=False, null=False)
    disposition  = models.CharField(max_length=64,null=True,blank=True) # interested, attending, attended

    def __str__(self):
        return '<{} {} {}>'.format('attendee',event.moniker(), person.moniker())
