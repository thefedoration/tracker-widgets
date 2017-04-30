from __future__ import unicode_literals

from django.db import models

from utils.models import BaseModel
from django.contrib.auth.models import User


class Widget(BaseModel):
    """
    Widget model for the 'Today' screen
    """
    name = models.CharField(max_length=100, blank=False, null=False, unique=True)
    description = models.CharField(max_length=255)
    
    def __unicode__(self):
        return self.name
        
        
        
        
class WidgetVersion(BaseModel):
    """
    A specific upload of a widget
    """
    widget = models.ForeignKey(Widget, null=False, blank=False)
    version = models.IntegerField(default=1, blank=False, null=False)
    is_active = models.BooleanField(default=False)
    
    class Meta:
        unique_together = ('widget', 'version')
    
    def __unicode__(self):
        return "%s (v%s)" % (self.widget.name, self.version)
        
        
        
class WidgetDownload(BaseModel):
    """
    A user's relationship with a widget
    """
    user = models.ForeignKey(User, null=False, blank=False)
    widget = models.ForeignKey(Widget, null=False, blank=False)
    widget_version = models.ForeignKey(WidgetVersion, null=False, blank=False)
    is_active = models.BooleanField(default=True)
    
    def __unicode__(self):
        return "%s - %s" % (self.user.username, self.widget.name)
