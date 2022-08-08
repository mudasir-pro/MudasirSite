from pyexpat import model
from django.db import models
from django.utils import timezone

# Create your models here.
class contactMessage(models.Model):
    fName=models.CharField(max_length=30)
    lName=models.CharField(max_length=30)
    email=models.EmailField()
    message=models.TextField()
    dataTime=models.DateTimeField(auto_now=True)

