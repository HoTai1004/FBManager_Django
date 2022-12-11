from django.db import models


class Turf(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self) -> str:
        return self.name
