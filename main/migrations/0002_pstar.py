# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-26 02:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pstar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(blank=True, max_length=256, null=True)),
                ('twitter_id', models.CharField(blank=True, max_length=256, null=True)),
            ],
        ),
    ]
