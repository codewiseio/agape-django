# make_migrations.py

import os
import sys

test_dir = os.path.dirname(__file__)
sys.path.insert(0, test_dir)

if __name__ == "__main__":
	os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tests.test_settings")

	from django.conf import settings

	from django.core.management import execute_from_command_line
	args = sys.argv + ["makemigrations"]
	execute_from_command_line(args)

