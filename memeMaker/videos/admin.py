from django.contrib import admin

# Register your models here.
from .models import Video, VideoClip, VideoType, Actor, ActorFrame, ObjectType, ObjectFrame, EmotionFrame, Emotion

admin.site.register(Video)
admin.site.register(VideoType)
admin.site.register(VideoClip)
admin.site.register(Actor)
admin.site.register(ActorFrame)
admin.site.register(ObjectType)
admin.site.register(ObjectFrame)
admin.site.register(Emotion)
admin.site.register(EmotionFrame)