from django.conf.urls import url, include

import frontend.views as views

urlpatterns = [
    url(r'^', views.index),
]
