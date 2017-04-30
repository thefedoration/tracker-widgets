from __future__ import absolute_import

from django.conf.urls import url, include

urlpatterns = [
    url(r'^widgets/', include('widgets.api.urls')),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
