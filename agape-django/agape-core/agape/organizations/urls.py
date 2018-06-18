from django.conf.urls import url, include
from .views import OrganizationViewSet

# build router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'organizations', OrganizationViewSet, base_name='organizations')

urlpatterns = [
    url(r'^',include(router.urls)),
]