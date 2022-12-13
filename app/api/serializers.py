from rest_framework import serializers
from . models import Turf
# from django.contrib.auth.models import User
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.validators import UniqueValidator
# from django.contrib.auth.password_validation import validate_password

class TurfSerializer(serializers.ModelSerializer):
  class Meta:
    model = Turf
    fields = '__all__'

# class UserSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = User
#     fields = ["id", "first_name", "last_name", "username"]