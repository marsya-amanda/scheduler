from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    title = models.CharField(max_length=250)
    pinned = models.BooleanField(default=False)
    dateCreated = models.DateTimeField(auto_now_add=True)
    startDate = models.DateField()
    endDate = models.DateField()
    status = models.BooleanField(default=False)
    bestAvailability = models.DateTimeField(null=True, blank=True)
    participants = models.ManyToManyField('User')
    numParticipants = models.IntegerField(default=0)
    numResponded = models.IntegerField(default=0)
    numAvailable = models.IntegerField(default=0)
    tag = models.CharField(max_length=100, null=True, blank=True)
    link = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.title
    
class User(models.Model):
    id = models.UUIDField(primary_key=True, editable=False)
    username = models.CharField(max_length=200, unique=True)
    displayName = models.CharField(max_length=200)
    timezone = models.CharField(max_length=100)

    def __str__(self):
        return self.username
