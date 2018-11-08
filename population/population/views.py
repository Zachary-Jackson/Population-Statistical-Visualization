from rest_framework import viewsets

from .models import Location
from .serializers import LocationSerializer


class RetrieveLocationView(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that displays all of the population data for a location
    """
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
