from django.db import models

from django.contrib.auth import get_user_model
from django.dispatch import receiver
User = get_user_model()

from django.conf import settings
import os;


class File (models.Model):

    entity = 'file'
    
    progenitor  = models.CharField(max_length=64 ,null=True, blank=True)

    name         = models.CharField(max_length=255,null=True ,blank=True)
    type         = models.CharField(max_length=16 ,null=True ,blank=True)
    path         = models.TextField(max_length=255, null=True, blank=True)

    label        = models.CharField(max_length=255 ,null=True ,blank=True)
    description  = models.TextField(null=True,blank=True)

    uploaded     = models.DateTimeField(auto_now_add=True,blank=True,null=True)
    uploaded_by  = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True, related_name="uploaded_user")

    def full_path(self):
        return settings.MEDIA_ROOT + self.path;

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{} {} {}>'.format(self.moniker(), self.type, self.value)


@receiver(models.signals.post_delete, sender=File)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
    Deletes file from file system when the
    when corresponding `File` object is deleted.
    """
    if instance.full_path():
        if os.path.isfile(instance.full_path()):
            os.remove(instance.full_path())


@receiver(models.signals.pre_save, sender=File)
def auto_delete_file_on_change(sender, instance, **kwargs):
    """
    Deletes old file from filesystem
    when corresponding `File` object is updated
    with new file.
    """

    # don't check new files
    if not instance.pk:
        return False

    # get the old file path
    try:
        old_instance =  File.objects.get(pk=instance.pk)
    except File.DoesNotExist:
        return False

    # if the new file path and the old file path are not the same
    if not old_instance.path == instance.path:
        if os.path.isfile(old_instance.full_path()):
            os.remove(old_instance.full_path())
