from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializers import TurfSerializer
from . models import Turf
from . models import TimeRent
from . models import Booking
from . serializers import TimeSerializer
from . serializers import BookingSerializer
# Create your views here.


@api_view(['GET'])
def turfOverview(request):
  api_urls = {
      'List': '/turf-list',
      'Create': '/turf-create/',
      'Update': '/turf-update/<int:id>',
      'Delete': '/turf-detail/<int:id>'
  }
  return Response(api_urls)

# Turf
@api_view(["GET"])
def getAllTurf(request):
  turfs = Turf.objects.all()
  serialier = TurfSerializer(turfs, many=True)
  return Response(serialier.data)

@api_view(['GET'])
def ViewTurf(request,pk):
  turf=Turf.objects.get(id=pk)
  serialier = TurfSerializer(turf, many=False)
  return Response(serialier.data)

@api_view(['POST'])
def CreateTurf(request):
  serialier = TurfSerializer(data=request.data)
  if serialier.is_valid():
    serialier.save()
  return Response(serialier.data)

@api_view(['POST'])
def UpdateTurf(request,pk):
  turf = Turf.objects.get(id=pk)
  serialier = TurfSerializer(instance=turf,data=request.data)
  if serialier.is_valid():
    serialier.save()
  return Response(serialier.data)


@api_view(['GET'])
def DeleteTurf(request,pk):
  turf=Turf.objects.get(id=pk)
  turf.delete()
  return Response('Item delete succesfully!')

# Time
@api_view(["GET"])
def getAllTime(request):
  times = TimeRent.objects.all()
  serialier = TimeSerializer(times, many=True)
  return Response(serialier.data)

@api_view(['GET'])
def ViewTime(request,pk):
  time=TimeRent.objects.get(id=pk)
  serialier = TimeSerializer(time, many=False)
  return Response(serialier.data)

@api_view(['POST'])
def CreateTime(request):
  serialier = TimeSerializer(data=request.data)
  if serialier.is_valid():
    serialier.save()
  return Response(serialier.data)

@api_view(['POST'])
def UpdateTime(request,pk):
  time = TimeRent.objects.get(id=pk)
  serialier = TimeSerializer(instance=time,data=request.data)
  if serialier.is_valid():
    serialier.save()
  return Response(serialier.data)


@api_view(['GET'])
def DeleteTime(request,pk):
  time=TimeRent.objects.get(id=pk)
  time.delete()
  return Response('Item delete succesfully!')


# Booking
@api_view(["GET"])
def getAllBooking(request):
  bookings = Booking.objects.all()
  serialier = BookingSerializer(bookings, many=True)
  return Response(serialier.data)

@api_view(['GET'])
def ViewBooking(request,pk):
  booking=Booking.objects.get(id=pk)
  serialier = BookingSerializer(booking, many=False)
  return Response(serialier.data)

@api_view(['POST'])
def CreateBooking(request):
  serialier = BookingSerializer(data=request.data)
  if serialier.is_valid():
    serialier.save()
  return Response(serialier.data)

@api_view(['GET'])
def DeleteBooking(request,pk):
  booking=BookingSerializer.objects.get(id=pk)
  booking.delete()
  return Response('Item delete succesfully!')