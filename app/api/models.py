from django.db import models
from django.conf import settings

class Turf(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)
    ownerID = models.IntegerField()
    def __str__(self) -> str:
        return self.name

# class Account(models.Model):


# class User(models.Model):
#     name = models.CharField(max_length=200, null = False , blank = False)
#     image = models.ImageField(upload_to = "images/")
#     phone = models.CharField(max_length=10, null= False, blank= False)
class TimeRent(models.Model):
    startTime = models.TimeField()
    endTime = models.TimeField()

class Booking(models.Model):
    turnId = models.ForeignKey(Turf,on_delete=models.CASCADE) 
    userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    timeID = models.ForeignKey(TimeRent,on_delete=models.CASCADE)
    price =models.DecimalField(max_digits = 5,decimal_places = 2)