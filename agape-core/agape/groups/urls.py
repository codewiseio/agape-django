from django.conf.urls import url, include
from .views import GroupViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'groups', GroupViewSet, base_name='groups')

urlpatterns = [
    url(r'^',include(router.urls)),
]