from rest_framework import serializers
from .models import Event, User

"""
A serializer in Django REST Framework (DRF) is a class 
that converts complex data types, such as Django model instances, 
into native Python datatypes that can then be easily rendered 
into JSON, XML, or other content types.

"Turning models to API" means exposing your Django models 
(like Event and User) as data that can be sent and received 
over the web, usually in JSON format, through an API 
(Application Programming Interface).
"""

class EventSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'