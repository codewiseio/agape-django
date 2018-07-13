from django.conf.urls import url, include
from .views import PropertyViewSet, RoomViewSet, RoomTypeViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'properties', PropertyViewSet, base_name='properties')
router.register(r'rooms', RoomViewSet, base_name='rooms')
router.register(r'room-types', RoomTypeViewSet, base_name='room-types')

urlpatterns = [
    url(r'^',include(router.urls)),
]