from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializers import TurfSerializer
from . models import Turf
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
