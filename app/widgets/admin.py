from __future__ import absolute_import
from django.contrib import admin

from widgets.models import Widget, WidgetVersion, WidgetDownload


@admin.register(Widget)
class WidgetAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'is_live',
        'latest_version',
        'downloads',
        'owner',
    )
    
    search_fields = ('name', 'owner__username',)

    raw_id_fields = ('owner',)
    autocomplete_lookup_fields = {
        'owner': ['owner'],
    }
    
    def latest_version(self, obj):
        if obj.widgetversion_set.live():
            return obj.widgetversion_set.live().order_by('version').last().version
                
    def is_live(self, obj):
        return obj.widgetversion_set.live().exists()
    is_live.boolean = True
    
    def downloads(self, obj):
        return obj.widgetdownload_set.active().count()
                
                
@admin.register(WidgetVersion)
class WidgetVersionAdmin(admin.ModelAdmin):

    list_display = (
        'widget',
        'version',
        'is_active',
        'is_approved',
        'downloads',
    )
    
    search_fields = ('widget__name',)

    raw_id_fields = ('widget',)
    autocomplete_lookup_fields = {
        'widget': ['widget'],
    }
    
    def downloads(self, obj):
        return obj.widgetdownload_set.active().count()
    
    
@admin.register(WidgetDownload)
class WidgetDownloadAdmin(admin.ModelAdmin):

    list_display = (
        'widget',
        'user',
        'version',
    )
    
    search_fields = ('widget__name', 'user__username',)

    raw_id_fields = ('widget', 'user', 'widget_version',)
    autocomplete_lookup_fields = {
        'widget': ['widget'],
        'user': ['user'],
        'widget_version': ['widget_version'],
    }
    
    def version(self, obj):
        return obj.widget_version.version
    
