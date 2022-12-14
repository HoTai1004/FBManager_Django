from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.turfOverview, name="turfOverview"),
    path("turf-list/", views.getAllTurf, name="turf-list"),
    path('turf-detail/<int:pk>/',views.ViewTurf, name='turf-detail'),
    path('turf-create/',views.CreateTurf, name='turf-create'),
    path('turf-update/<int:pk>/',views.UpdateTurf, name='turf-update'),
    path('turf-delete/<int:pk>/',views.DeleteTurf, name='turf-delete'),
#time
    path("time-list/", views.getAllTime, name="time-list"),
    path('time-detail/<int:pk>/',views.ViewTime, name='time-detail'),
    path('time-create/',views.CreateTime, name='time-create'),
    path('time-update/<int:pk>/',views.UpdateTime, name='time-update'),
    path('time-delete/<int:pk>/',views.DeleteTime, name='time-delete'),
# Booking
    path("booking-list/", views.getAllBooking, name="booking-list"),
    path('booking-detail/<int:pk>/',views.ViewBooking, name='booking-detail'),
    path('booking-create/',views.CreateBooking, name='booking-create'),
    path('booking-delete/<int:pk>/',views.DeleteBooking, name='booking-delete'),

]
