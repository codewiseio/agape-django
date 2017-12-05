from django.conf.urls import url, include
from .views import MemberViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'members', MemberViewSet, base_name='members')

urlpatterns = [
    url(r'^',include(router.urls)),
]