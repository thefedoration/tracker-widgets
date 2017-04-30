from rest_framework import serializers
from widgets.models import Widget


class WidgetSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Widget
        fields = (
            'hash',
            'name',
            'description',
        )
