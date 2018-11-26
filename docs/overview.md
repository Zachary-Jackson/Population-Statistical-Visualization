# Population project
This is a website, primarily composed of REST API endpoints.
The endpoints relays information about various populations of country's from
1980-2010 using a series of graphs. The back-end API of the website is built
using the Django REST Framework

## Starting

Create a virtualenv and install the project requirements, which are listed in
`requirements.txt`. The easiest way to do this is with `pip install -r
requirements.txt` while your virtualenv is activated.


After this initialize the database with python manage.py migrate. All of
the required "populations" for the API will automatically be added to the
database.