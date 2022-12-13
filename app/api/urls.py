from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.turfOverview, name="turfOverview"),
    path("turf-list/", views.getAllTurf, name="turf-list"),
    path('turf-detail/<int:pk>/',views.ViewTurf, name='turf-detail'),
    path('turf-create/',views.CreateTurf, name='turf-create'),
    path('turf-update/<int:pk>/',views.UpdateTurf, name='turf-update'),
    path('turf-delete/<int:pk>/',views.DeleteTurf, name='turf-delete')
]
