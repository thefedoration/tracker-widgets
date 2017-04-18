from django.conf.urls import url, include

import frontend.views as frontend_views

urlpatterns = [
    url(r'^', frontend_views.index),
]
