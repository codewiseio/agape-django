from django.conf.urls import url, include
from .views import FileViewSet

# build router
from rest_framework.routers import DefaultRouter
from .views import FileDownloadView

router = DefaultRouter()
router.register(r'files', FileViewSet, base_name='files')

urlpatterns = [
    url(r'^',include(router.urls)),
    url(r'^view/$',FileDownloadView.as_view(), name='file-download')
]

