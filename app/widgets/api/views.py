from __future__ import absolute_import

from rest_framework import viewsets, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from widgets.models import Widget, WidgetDownload
from widgets.api.serializers import WidgetSerializer, WidgetDownloadSerializer


class WidgetViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Widget.objects.live()
    model = Widget

    def get_serializer_class(self, *args, **kwargs):
        return WidgetSerializer
    
    
class WidgetDownloadViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = WidgetDownload.objects.live().active()
    model = WidgetDownload

    def get_serializer_class(self, *args, **kwargs):
        return WidgetDownloadSerializer

    def get_queryset(self, *args, **kwargs):
        queryset = super(WidgetDownloadViewSet, self).get_queryset(*args, **kwargs)
        return queryset.filter(user=self.request.user)
