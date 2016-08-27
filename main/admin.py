from django.contrib import admin

from models import *

class ModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'created_on')
    list_display_links = ('name','id')
    search_fields = ('name',)
    ordering = ('name','created_on')

#admin.site.register(Tweet)
