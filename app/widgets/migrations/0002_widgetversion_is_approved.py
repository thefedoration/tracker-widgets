# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-30 17:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('widgets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='widgetversion',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]
