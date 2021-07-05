from django.db import models
from django.db.models.base import Model

# Create your models here.
class Task(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    is_completed=models.BooleanField(default=False)
    uid=models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return str(self.name)