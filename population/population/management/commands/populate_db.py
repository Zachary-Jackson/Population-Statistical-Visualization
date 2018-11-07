"""
A Script designed to import all Location objects into the database from
the Populations CSV file
"""
import csv
import datetime

from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.management.base import BaseCommand
from population.models import Location


def validate_or_return_none(string: str):
    """
    Checks to see if the string can be turned into a float

    :param string: Any string value
    :return if valid: The string given in float format
    :return if invalid:
        None
    """
    try:
        floated_string = float(string)
    except ValueError:
        return None

    return floated_string


class Command(BaseCommand):
    help = 'Initializes the database'

    def handle(self, *args, **options):
        """
        Gets all of the rows from the Populations CSV and creates Location
        objects with the data
        """
        # Creates a timer letting User's know how long the command took
        # No reason to do this, other than for the fun of it
        time = datetime.datetime.now()


        # Create file location
        static_location = staticfiles_storage.location
        file_name = '\csv_file\populationbycountry19802010millions.csv'
        file_location = static_location + file_name

        with open(file_location, newline='') as file:
            csv_reader = csv.DictReader(file)

            for row in csv_reader:
                location_dict = dict()
                location_dict['name'] = row['']

                # Create the various information for each year

                # 1980s
                location_dict['nineteen_eighty'] = validate_or_return_none(row['1980'])
                location_dict['nineteen_eighty_one'] = validate_or_return_none(row['1981'])
                location_dict['nineteen_eighty_two'] = validate_or_return_none(row['1982'])
                location_dict['nineteen_eighty_three'] = validate_or_return_none(row['1983'])
                location_dict['nineteen_eighty_four'] = validate_or_return_none(row['1984'])
                location_dict['nineteen_eighty_five'] = validate_or_return_none(row['1985'])
                location_dict['nineteen_eighty_six'] = validate_or_return_none(row['1986'])
                location_dict['nineteen_eighty_seven'] = validate_or_return_none(row['1987'])
                location_dict['nineteen_eighty_eight'] = validate_or_return_none(row['1988'])
                location_dict['nineteen_eighty_nine'] = validate_or_return_none(row['1989'])

                # 1990s
                location_dict['nineteen_ninety'] = validate_or_return_none(row['1990'])
                location_dict['nineteen_ninety_one'] = validate_or_return_none(row['1991'])
                location_dict['nineteen_ninety_two'] = validate_or_return_none(row['1992'])
                location_dict['nineteen_ninety_three'] = validate_or_return_none(row['1993'])
                location_dict['nineteen_ninety_four'] = validate_or_return_none(row['1994'])
                location_dict['nineteen_ninety_five'] = validate_or_return_none(row['1995'])
                location_dict['nineteen_ninety_six'] = validate_or_return_none(row['1996'])
                location_dict['nineteen_ninety_seven'] = validate_or_return_none(row['1997'])
                location_dict['nineteen_ninety_eight'] = validate_or_return_none(row['1998'])
                location_dict['nineteen_ninety_nine'] = validate_or_return_none(row['1999'])

                # 2000s
                location_dict['two_thousand'] = validate_or_return_none(row['2000'])
                location_dict['two_thousand_one'] = validate_or_return_none(row['2001'])
                location_dict['two_thousand_two'] = validate_or_return_none(row['2002'])
                location_dict['two_thousand_three'] = validate_or_return_none(row['2003'])
                location_dict['two_thousand_four'] = validate_or_return_none(row['2004'])
                location_dict['two_thousand_five'] = validate_or_return_none(row['2005'])
                location_dict['two_thousand_six'] = validate_or_return_none(row['2006'])
                location_dict['two_thousand_seven'] = validate_or_return_none(row['2007'])
                location_dict['two_thousand_eight'] = validate_or_return_none(row['2008'])
                location_dict['two_thousand_nine'] = validate_or_return_none(row['2009'])
                location_dict['two_thousand_ten'] = validate_or_return_none(row['2010'])

                # a bulk_create could be used here as well
                Location.objects.create(**location_dict)

        # Tell the user how long this command took
        time_taken = datetime.datetime.now() - time

        print(f'This command took '
              f'{time_taken.seconds}.{time_taken.microseconds}'
              f' seconds to complete!')