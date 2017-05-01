from rest_framework import serializers
from widgets.models import Widget, WidgetDownload


class WidgetSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Widget
        fields = (
            'hash',
            'name',
            'description',
        )
        
        
class WidgetDownloadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = WidgetDownload
        fields = (
            'hash',
            'widget',
            'is_active',
            'version',
        )
        
    widget = WidgetSerializer()
    version = serializers.IntegerField(source='widget_version.version')
