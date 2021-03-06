# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-04 11:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('people', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('progenitor', models.CharField(blank=True, max_length=64, null=True)),
                ('role', models.CharField(blank=True, default='member', max_length=16)),
                ('involvement', models.CharField(blank=True, max_length=16)),
                ('join_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('added_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='GroupMembers_added', to='people.Person')),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='people.Person')),
            ],
        ),
    ]
