from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . serializers import TurfSerializer
from . models import Turf
# Create your views here.


@api_view(['GET'])
def turfOverview(rq):
  api_urls = {
      'List': '/turf-list',
      'Create': '/turf-create/',
      'Update': '/turf-update/<int:id>',
      'Delete': '/turf-create/<int:id>'
  }
  return Response(api_urls)


@api_view(["GET"])
def getAllTurf(rq):
  turfs = Turf.objects.all()
  serialier = TurfSerializer(turfs, many=True)
  return Response(serialier.data)
