"""
	API2 URLS FOR TRACKING APP
"""
from __future__ import absolute_import
from django.conf.urls import include, url

from rest_framework import routers

from widgets.api.views import WidgetViewSet


router = routers.DefaultRouter()
router.register(r'widgets', WidgetViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
