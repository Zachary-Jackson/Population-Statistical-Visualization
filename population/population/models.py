from django.db import models


class Location(models.Model):
    """Defines how a location's data is stored"""

    class Meta:
        ordering = ['name']

    # The name of the Location
    name = models.CharField(max_length=50, unique=True)

    # All of the population statistics for a location from 1980-2010
    # The numbers are corresponding millions

    # 1980s
    nineteen_eighty = models.FloatField(blank=True, null=True)
    nineteen_eighty_one = models.FloatField(blank=True, null=True)
    nineteen_eighty_two = models.FloatField(blank=True, null=True)
    nineteen_eighty_three = models.FloatField(blank=True, null=True)
    nineteen_eighty_four = models.FloatField(blank=True, null=True)
    nineteen_eighty_five = models.FloatField(blank=True, null=True)
    nineteen_eighty_six = models.FloatField(blank=True, null=True)
    nineteen_eighty_seven = models.FloatField(blank=True, null=True)
    nineteen_eighty_eight = models.FloatField(blank=True, null=True)
    nineteen_eighty_nine = models.FloatField(blank=True, null=True)

    # 1990s
    nineteen_ninety = models.FloatField(blank=True, null=True)
    nineteen_ninety_one = models.FloatField(blank=True, null=True)
    nineteen_ninety_two = models.FloatField(blank=True, null=True)
    nineteen_ninety_three = models.FloatField(blank=True, null=True)
    nineteen_ninety_four = models.FloatField(blank=True, null=True)
    nineteen_ninety_five = models.FloatField(blank=True, null=True)
    nineteen_ninety_six = models.FloatField(blank=True, null=True)
    nineteen_ninety_seven = models.FloatField(blank=True, null=True)
    nineteen_ninety_eight = models.FloatField(blank=True, null=True)
    nineteen_ninety_nine = models.FloatField(blank=True, null=True)

    # 2000s
    two_thousand = models.FloatField(blank=True, null=True)
    two_thousand_one = models.FloatField(blank=True, null=True)
    two_thousand_two = models.FloatField(blank=True, null=True)
    two_thousand_three = models.FloatField(blank=True, null=True)
    two_thousand_four = models.FloatField(blank=True, null=True)
    two_thousand_five = models.FloatField(blank=True, null=True)
    two_thousand_six = models.FloatField(blank=True, null=True)
    two_thousand_seven = models.FloatField(blank=True, null=True)
    two_thousand_eight = models.FloatField(blank=True, null=True)
    two_thousand_nine = models.FloatField(blank=True, null=True)
    two_thousand_ten = models.FloatField(blank=True, null=True)

    def __str__(self):
        """Defines how the Location object is displayed"""
        return self.name
