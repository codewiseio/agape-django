from django.db import models


# Create your models here.
class Model(models.Model):

    entity = 'undefined'

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{}>'.format(self.moniker())

    class Meta:
        abstract = True