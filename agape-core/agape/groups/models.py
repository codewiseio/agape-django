from django.db import models

# Create your models here.
class Group (models.Model):
    entity = 'group'

    DISABLED = -1
    UNPUBLISHED = 0
    PUBLISHED = 1

    STATUS_CHOICES = (
            (DISABLED,"Disabled"),
            (UNPUBLISHED,"Unpublished"),
            (PUBLISHED,"Published"),
        )

    progenitor       = models.CharField(max_length=64,null=True,blank=True)
    name             = models.CharField(max_length=255,null=True,blank=True)
    description      = models.TextField(null=True,blank=True)

    status           = models.IntegerField(choices=STATUS_CHOICES,blank=True,null=False,default=0)


    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{} {} {}>'.format(self.moniker(), self.name)
