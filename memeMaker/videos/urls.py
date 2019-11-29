from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from videos.api import VideoTypeViewSet, VideoViewSet, VideoClipViewSet
from videos.views import download

router = DefaultRouter()
router.register(r'videoType', VideoTypeViewSet)
router.register(r'video', VideoViewSet)
router.register(r'videoClip', VideoClipViewSet)

urlpatterns = [url(r'download', download)]
# urlpatterns = router.urls + [url(r'download', download)]