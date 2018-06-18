from django.conf.urls import url, include
from .views import EventViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'events', EventViewSet, base_name='events')

urlpatterns = [
    url(r'^',include(router.urls)),
]