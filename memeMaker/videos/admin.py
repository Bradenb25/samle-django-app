from django.contrib import admin

# Register your models here.
from videos.models import Video, VideoClip, VideoType

admin.site.register(Video)
admin.site.register(VideoType)
admin.site.register(VideoClip)