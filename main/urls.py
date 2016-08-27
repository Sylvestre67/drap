__author__ = 'gugs'
from django.conf.urls import url, include

from views import *
from rest_framework import routers

router = routers.DefaultRouter()
#router.register(r'pstar', PstarViewSet)

urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),

    ###############################################
    ##
    ## REST API call
    ##
    ###############################################
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]