from django.db import models
from django.db.models.base import Model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.
class Task(models.Model):
<<<<<<< HEAD
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    is_completed = models.BooleanField(default=False)
=======
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    is_completed=models.BooleanField(default=False)
    uid=models.CharField(max_length=100,null=True,blank=True)
>>>>>>> fc3927e65160498f5b854db55ffa9261cf58187e

    def __str__(self):
        return str(self.name)

