from django.db import models

# Create your models here.
class Contact (models.Model):

    entity = 'contact'

    TELEPHONE = 'Telephone'
    EMAIL     = 'Email'
    CHAT      = 'Chat'
    WEBSITE   = 'Website'
    PROFILE   = 'Profile'

    TYPE_CHOICES = (
        ("", '-- select --'),
        (TELEPHONE, TELEPHONE),
        (EMAIL, EMAIL),
        (CHAT, CHAT),
        (PROFILE, PROFILE),
        (WEBSITE, WEBSITE)
    )
    
    progenitor  = models.CharField(max_length=64 ,null=True, blank=True)
    type        = models.CharField(max_length=16 ,null=True ,blank=True,choices=TYPE_CHOICES)
    value       = models.CharField(max_length=255,null=True ,blank=True)
    label       = models.CharField(max_length=32 ,null=True ,blank=True)

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{} {} {}>'.format(self.moniker(), self.type, self.value)
