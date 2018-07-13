from django.contrib import admin

# Register your models here.
from .models import Property, Room

admin.site.register(Property)
admin.site.register(Room)
