from django.db import models
from django.db.models.base import Model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)

