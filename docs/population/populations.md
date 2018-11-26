# Population
This is a app, primarily composed of REST API endpoints.
The endpoints relays information about various populations of country's from
1980-2010 using a series of graphs. The back-end API of the website is built
using the Django REST Framework

## Routes

To create user objects though the api use the following routes.

 * To create a user POST a password and username to
 	* `/api/user`

 * To receive a particular user's token POST a password and username to
 	* `/api/user/login`


The following routes are expected by the JavaScript application.

* To get the next liked/disliked/undecided dog

	* `/api/dog/<pk>/liked/next/`
	* `/api/dog/<pk>/disliked/next/`
	* `/api/dog/<pk>/undecided/next/`

* To change the dog's status

	* `/api/dog/<pk>/liked/`
	* `/api/dog/<pk>/disliked/`
	* `/api/dog/<pk>/undecided/`

* To change or set user preferences

	* `/api/user/preferences/`


## Models

The following models and associated field names should be present as they
will be expected by the JavaScript application.

* `Location` - This model represents a population

	Fields:

	* `nineteen_eighty`
	* Through
	* `two_thousand_ten`
	* All years are included with their respective model attribute