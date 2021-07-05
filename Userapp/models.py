from django.db import models
from django.db.models.base import Model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class User(models.Model):
    username = models.CharField(max_length=200, default='')
    password = models.CharField(max_length=200, default='')
    password2 = models.CharField(max_length=200, default='')
    email = models.CharField(max_length=200, default='')
    phone = models.CharField(max_length=300, default='')
    first_name = models.CharField(max_length=200, default='')
    last_name = models.CharField(max_length=200, default='')
    
    def __str__(self):
        return str(self.username)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


