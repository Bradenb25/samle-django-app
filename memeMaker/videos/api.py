from rest_framework import permissions, filters
from rest_framework.viewsets import ModelViewSet

from videos.models import VideoType, Video, VideoClip
from videos.serializers import VideoTypeSerializer, VideoSerializer, VideoClipSerializer


class VideoTypeViewSet(ModelViewSet):
    queryset = VideoType.objects.all()
    serializer_class = VideoTypeSerializer
    permission_classes = (permissions.IsAuthenticated,)


class VideoViewSet(ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = (permissions.IsAuthenticated,)


class VideoClipViewSet(ModelViewSet):

    search_fields = ['subtitle_text']
    filter_backends = (filters.SearchFilter,)
    queryset = VideoClip.objects.all()
    serializer_class = VideoClipSerializer
    # permission_classes = (permissions.IsAuthenticated,)

