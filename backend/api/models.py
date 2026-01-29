from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Event(models.Model):
    """
    create defaults in a bit
    """
    id = models.UUIDField()
    title = models.CharField() # add max
    pinned = models.BooleanField()
    dateCreated = models.DateTimeField() # set default timezone
    startDate = models.DateField()
    endDate = models.DateField()
    status = models.BooleanField()
    bestAvailability = models.DateTimeField()
    participants = ArrayField(models.CharField)
    numParticipants = models.IntegerField()
    numResponded = models.IntegerField()
    numAvailable = models.IntegerField()
    tag = models.CharField()
    link = models.URLField()

    def __str__(self):
        return self.title
    
class User(models.Model):
    id = models.UUIDField()
    username = models.CharField()
    displayName = models.CharField()
    timezone = models.CharField()
    events = ArrayField(models.ForeignKey(Event))

    def __str__(self):
        return self.username
