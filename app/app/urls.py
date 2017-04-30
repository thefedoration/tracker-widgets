from django.conf.urls import url, include
from django.contrib import admin

import app.views as landing_views

urlpatterns = [
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^app/', include('frontend.urls')),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^api/', include('app.api')),
    url(r'^$', landing_views.index),
]
