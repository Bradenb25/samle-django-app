from rest_framework import serializers

from .models import VideoClip, VideoType, Video, Actor, ActorFrame, ObjectFrame, ObjectType, Emotion, EmotionFrame


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
        # exclude = ('id', 'video')
        model = VideoClip


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = Actor


class ActorFrameSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = ActorFrame


class ObjectTypeSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = ObjectType


class ObjectFrameSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = ObjectFrame

class EmotionSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = Emotion

class EmotionFrameSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = []
        model = EmotionFrame