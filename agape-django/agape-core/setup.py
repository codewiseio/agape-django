import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='agape-django',
    version='0.3.0',
    packages=['agape','agape.authentication','agape.contacts','agape.organizations','agape.people','agape.members','agape.files'],
    include_package_data=True,
    license='MIT License', 
    description='Collection of reusable Django Applications for Rapid Application Development',
    long_description=README,
    url = 'https://github.com/codewiseio/agape-django',
    author='Jeffrey Ray Hallock',
    author_email='codewiseio@gmail.com',
    test_suite = "runtests.runtests",
    install_requires = [
        'Django>=1.11.5',
        'django-cors-headers>=2.1.0',
        'django-filter>=1.1.0',
        'djangorestframework>=3.6.4',
        'djangorestframework-jwt>=1.11.0'
    ],
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',  # example license
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        # Replace these appropriately if you are stuck on Python 2.
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
