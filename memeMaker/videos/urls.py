from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from .api import VideoTypeViewSet, VideoViewSet, VideoClipViewSet, ActorFrameViewSet
from .views import download, addArchiveVideo, processVideo, downloadSpecificTime, create_gif, get_clips_by_actor, \
    get_clips_by_object, get_clips_by_emotion

router = DefaultRouter()
router.register(r'videoType', VideoTypeViewSet)
router.register(r'video', VideoViewSet)
router.register(r'videoClip', VideoClipViewSet)
router.register(r'actorFrame', ActorFrameViewSet)

# urlpatterns = [url(r'download', download)]
urlpatterns = router.urls + [
    url(r'download/frame', downloadSpecificTime),
    url(r'download', download),
    url(r'addArchive', addArchiveVideo),
    url(r'processVideo', processVideo),
    url(r'createGIF', create_gif),
    url(r'byActor', get_clips_by_actor),
    url(r'byObject', get_clips_by_object),
    url(r'byEmotion', get_clips_by_emotion)
]

