#
# THIS FILE NOT CURRENTLY IN USE
#  - Possibly will remove CRUD operations to a proxy - this will allow using the 
#  proxy to update, delete, remove, - not called from a view and still have the
#  signals emitted. This would be useful if another applications callbacks  are
#  used to add remove objects and we still want to emit these signals


from django.test import TestCase
from agape import viewsets

from agape.authentication.models import User
from agape.authentication.serializers import UserSerializer
from agape.signals import on


from rest_framework.test import APIRequestFactory

# class TestViewSet(viewsets.ProxyViewSet):

#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     context = 'user'



class ProxyViewSetTestCase(TestCase):

    def setUp(self):
        self.viewset = TestViewSet()
        self.viewset.action_map = {'post':'create'}
        pass

    def test_sanity(self):
        self.assertTrue(True, "Sane")

    def test_create_signals(request):

        scope = {}

        def on_request(observer,request,*args,**kwargs):
            scope['request'] = True

        def on_before(observer,data):
            scope['before'] = True

        def on_success(observer,instance):
            scope['success'] = True

        def on_serialize(observer,data):
            scope['serialize'] = True


        on('user.create:request',on_request )