import os
import sys
import django

test_dir = os.path.dirname(__file__)
sys.path.insert(0, test_dir)

from django.conf import settings
from django.test.utils import get_runner


def runtests():
	os.environ['DJANGO_SETTINGS_MODULE'] = 'tests.test_settings'
	django.setup()

	# try:
	# 	# Django <= 1.8
	# 	from django.test.simple import DjangoTestSuiteRunner
	# 	test_runner = DjangoTestSuiteRunner(verbosity=1)
	# except ImportError:
	# 	# Django >= 1.8
	# 	django.setup()
	# 	from django.test.runner import DiscoverRunner
	# 	test_runner = DiscoverRunner(verbosity=1)

	TestRunner = get_runner(settings)
	test_runner = TestRunner()

	if len(sys.argv) > 1:
		failures = test_runner.run_tests(sys.argv[1:])
	else:
		failures = test_runner.run_tests(
			[
				"agape.people.tests",
				"agape.contacts.tests",
				"agape.organizations.tests",
				"agape.members.tests",
				"agape.events.tests"
			]
		)
	sys.exit(bool(failures))

if __name__ == '__main__':
	runtests()