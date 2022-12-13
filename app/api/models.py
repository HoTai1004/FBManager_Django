from django.db import models


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
