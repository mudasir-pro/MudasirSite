from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index, name='home_intro'),
    path('contact',views.contact,name='contact_intro')
]