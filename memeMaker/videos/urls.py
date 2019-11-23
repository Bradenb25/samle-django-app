from rest_framework.routers import DefaultRouter

from videos.api import VideoTypeViewSet, VideoViewSet, VideoClipViewSet

router = DefaultRouter()
router.register(r'videoType', VideoTypeViewSet)
router.register(r'video', VideoViewSet)
router.register(r'videoClip', VideoClipViewSet)

urlpatterns = router.urls