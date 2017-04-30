from __future__ import absolute_import

from rest_framework import viewsets, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from widgets.models import Widget
from widgets.api.serializers import WidgetSerializer


class WidgetViewSet(viewsets.ReadOnlyModelViewSet):
    # permission_classes = (IsStaff,)
    queryset = Widget.objects.live()
    model = Widget

    def get_serializer_class(self, *args, **kwargs):
        return WidgetSerializer

    # def get_queryset(self):
    #     queryset = super(WidgetViewSet, self).get_queryset(*args, **kwargs)
    #     return queryset.live()
