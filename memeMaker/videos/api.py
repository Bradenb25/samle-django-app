from rest_framework import permissions, filters
from rest_framework.viewsets import ModelViewSet

from .models import VideoType, Video, VideoClip, ActorFrame, ObjectType, Emotion
from .serializers import VideoTypeSerializer, VideoSerializer, VideoClipSerializer, ActorFrameSerializer, \
    EmotionSerializer, EmotionFrameSerializer


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


class ActorFrameViewSet(ModelViewSet):
    queryset = ActorFrame.objects.all()
    # queryset = VideoClip.objects.all()
    serializer_class = ActorFrameSerializer
    # permission_classes = (permissions.IsAuthenticated,)


class EmotionFrameViewSet(ModelViewSet):
    queryset = Emotion.objects.all()
    serializer_class = EmotionFrameSerializer

# class ObjectTypeViewSet(ModelViewSet):
#     queryset = ObjectType.objects.all()
#     serializer_class = ObjectTypeSerializer
