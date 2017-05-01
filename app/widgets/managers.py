from __future__ import absolute_import

from django.db import models
from django.db.models import Q


"""
Queryset that is used as the model manager for Widgets
"""
class WidgetSet(models.QuerySet):
    
    # have active and approved versions
    def live(self):
        return self.filter(
            widgetversion__is_active=True,
            widgetversion__is_approved=True
        ).distinct()
        
        
"""
Queryset that is used as the model manager for WidgetVersions
"""
class WidgetVersionSet(models.QuerySet):
    
    # active and approved
    def live(self):
        return self.filter(is_active=True, is_approved=True).distinct()



"""
Queryset that is used as the model manager for WidgetDownloads
"""
class WidgetDownloadSet(models.QuerySet):
    
    # active
    def active(self):
        return self.filter(is_active=True).distinct()
        
    # live
    def live(self):
        return self.filter(
            widget_version__is_active=True,
            widget_version__is_approved=True
        ).distinct()


        
