from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Event
from .serialisers import EventSerialiser

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-pinned', '-dateCreated')
    serializer_class = EventSerialiser