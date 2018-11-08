from rest_framework import serializers

from .models import Location


class LocationSerializer(serializers.ModelSerializer):
    """Serializer for a Location object showing all fields"""

    class Meta:
        model = Location
        fields = '__all__'
