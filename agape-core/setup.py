import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='django-agape',
    version='0.2.2',
    packages=['agape','agape.authentication','agape.contacts','agape.organizations','agape.people','agape.members',],
    include_package_data=True,
    license='MIT License', 
    description='Collection of reusable Django Applications for RAD',
    long_description=README,
    url='https://codewise.live/',
    author='Jeffrey Ray Hallock',
    author_email='codewiseio@gmail.com',
    test_suite = "runtests.runtests",
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Framework :: Django :: Django Rest Framework',  # replace "X.Y" as appropriate
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
