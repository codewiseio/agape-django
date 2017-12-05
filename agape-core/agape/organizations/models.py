from django.db import models
from django.template.defaultfilters import slugify

import re
import itertools

# Create your models here.
class Organization (models.Model):

    entity = 'organization'

    prepopulated_fields = {"slug": ("name")}
   
    progenitor  = models.CharField(max_length=64,null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    name        = models.CharField(max_length=255,null=False,blank=False)
    slug        = models.SlugField(max_length=255,allow_unicode=True,blank=True)


    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def save(self, *args, **kwargs):
        self.set_slug_value(self.name)
        # save
        super().save(*args, **kwargs)


    def set_slug_value(self,slugbase):
       
        # check for user supplied slug
        if self.slug:
            # make sure it is really a slug
            self.slug = original = slugify(self.slug)

            # check for integer suffix, only perform this on user supplied
            # slugs to allow users to enter names like "Movie Sequel 2" that
            # will be duplicated as "movie-sequel-2-2" instead of "movie-sequel-3"
            result = re.search(r'-(\d)+$', self.slug)

            if result:
                base = re.sub(r'-(\d)+$', '', self.slug)
                integer = int(result.group(1))
            else:
                base = self.slug
                integer = 1

        # create a slug from the organization name
        else:
            self.slug = original = slugify(slugbase)
            base = self.slug
            integer = 1

        # find maximum length of the slug field
        max_length = self.__class__._meta.get_field('slug').max_length

        # ensure uniquness of the slug field
        # TODO: Add setting to enable slug uniqueness based only on progenitor
        for x in itertools.count(integer+1):
             # do not include this instance when checking for existing slug with this value
            query = self.__class__.objects.filter(slug=self.slug)
            query = query.exclude(id=self.id)

            # no slug with this name found, continue
            if not query.exists():
                break

            # truncate the slug to fit maximum length of field
            self.slug = "%s-%d" % (base[:max_length - len(str(x)) - 1], x)




    def __str__(self):
        return '<{} {}>'.format(self.moniker(), self.name)
