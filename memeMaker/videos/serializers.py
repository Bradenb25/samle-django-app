from rest_framework import serializers

from .models import VideoClip, VideoType, Video

class VideoTypeSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = VideoType

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = Video

class VideoClipSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = VideoClip