from django.http import HttpResponse,HttpResponseRedirect,Http404,HttpResponseForbidden,JsonResponse,HttpResponseForbidden
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic import TemplateView, FormView, DetailView, View
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import viewsets

from models import *
from serializers import *

# Create your views here.
class IndexView(TemplateView):
    template_name = 'ng-index.html'

    def get(self, request, *args, **kwargs):

        return super(IndexView,self).get(request,*args,**kwargs)


