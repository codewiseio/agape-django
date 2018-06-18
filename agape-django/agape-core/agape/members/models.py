from django.db import models


from django.utils import timezone
from agape.people.models import Person

# Create your models here.
class Member (models.Model):

    entity = 'member'

    progenitor      = models.CharField(max_length=64,null=True,blank=True)
    person          = models.ForeignKey(Person, on_delete=models.CASCADE, blank=False, null=False)
    
    role            = models.CharField(max_length=16,null=False,blank=True,default='member')
    involvement     = models.CharField(max_length=16,null=False,blank=True)
    join_date       = models.DateTimeField(blank=True,null=True,default=timezone.now)
    added_by        = models.ForeignKey(Person, on_delete=models.SET_NULL, blank=True, null=True, related_name='GroupMembers_added')

    def moniker(self):
        return '{}:{}'.format(self.entity, self.id)

    def __str__(self):
        return '<{} {}>'.format(self.moniker(), self.name)



from datetime import datetime
from django_filters import rest_framework as filters

class MemberFilter(filters.FilterSet):

    join_date = filters.CharFilter(method='filter_join_date__exact')
    join_date__gt = filters.CharFilter(method='filter_join_date__gt')
    join_date__lt = filters.CharFilter(method='filter_join_date__lt')

    person__first_name  = filters.CharFilter(lookup_expr='icontains')
    person__middle_name = filters.CharFilter(lookup_expr='icontains')
    person__last_name   = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Member
        fields = {
            'progenitor': ['exact'],
            'role': ['exact'],
            'involvement': ['exact'],
            'person__progenitor': ['exact'],
            'person__title': ['exact'],
            'person__gender': ['exact'],
            'person__birthday': ['exact','lt','gt']
        }

    def filter_join_date__exact(self, queryset, name, value):
        date = datetime.strptime(value, '%Y-%m-%d')
        date_range = (
            # The start_date with the minimum possible time
            datetime.combine(date, datetime.min.time()),
            # The start_date with the maximum possible time
            datetime.combine(date, datetime.max.time())
        )
        return queryset.filter(join_date__range=date_range)

    def filter_join_date__gt(self, queryset, name, value):
        date = datetime.strptime(value, '%Y-%m-%d')
        return queryset.filter(join_date__gt=date)

    def filter_join_date__lt(self,queryset, name, value):
        date = datetime.strptime(value, '%Y-%m-%d')
        date = datetime.combine(date, datetime.min.time())
        return queryset.filter(join_date__gt=date)


