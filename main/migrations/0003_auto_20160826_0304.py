# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-26 03:04
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_pstar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='token',
            name='token',
            field=django.contrib.postgres.fields.jsonb.JSONField(blank=True, null=True),
        ),
    ]
