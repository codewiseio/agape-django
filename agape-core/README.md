# Agape


Agape is collection of Django apps to use for building modern
web applications.


## Quick start


1. Add the desired applications into the INSTALLED_APPS setting like this:

    INSTALLED_APPS = [
        ...
        'agape.authentication',
    ]

2. Include the URLconf in your project urls.py like this:

    url(r'^/api/v1/', include('agape.authentication.urls')),


3. Run `python manage.py migrate` to create the models.

4. Start the development server and visit http://127.0.0.1:8000/


## Dependencies




## Developer Instructions


### Packaging & Distribution

# Package only
python setup.py sdist

# Package and submit to PyPi repository
python setup.py sdist upload -r pypi

### Testing

python runtests.py 
python runtests.py agape.people
python runtests.py agape.[module]

### Installation

pip install ../django-agape/dist/django-agape-*.tar.gz

pip install django-agape