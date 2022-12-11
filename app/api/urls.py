from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.turfOverview, name="turfOverview"),
    path("list_turf/", views.getAllTurf, name="list_turf")
]
