# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-30 17:18
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import utils.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Widget',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('datetime_updated', models.DateTimeField(auto_now=True)),
                ('hash', models.CharField(default=utils.models._createHash, max_length=64, unique=True)),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.CharField(max_length=255)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WidgetDownload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('datetime_updated', models.DateTimeField(auto_now=True)),
                ('hash', models.CharField(default=utils.models._createHash, max_length=64, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('widget', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='widgets.Widget')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='WidgetVersion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('datetime_updated', models.DateTimeField(auto_now=True)),
                ('hash', models.CharField(default=utils.models._createHash, max_length=64, unique=True)),
                ('version', models.IntegerField(default=1)),
                ('is_active', models.BooleanField(default=False)),
                ('widget', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='widgets.Widget')),
            ],
        ),
        migrations.AddField(
            model_name='widgetdownload',
            name='widget_version',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='widgets.WidgetVersion'),
        ),
        migrations.AlterUniqueTogether(
            name='widgetversion',
            unique_together=set([('widget', 'version')]),
        ),
    ]
