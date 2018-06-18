from django.conf.urls import url, include
from .views import ContactViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'contacts', ContactViewSet, base_name='contacts')

urlpatterns = [
    url(r'^',include(router.urls)),
]