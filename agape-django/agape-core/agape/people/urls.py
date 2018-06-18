from django.conf.urls import url, include
from .views import PersonViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'people', PersonViewSet, base_name='people')

urlpatterns = [
    url(r'^',include(router.urls)),
]