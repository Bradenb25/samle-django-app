from django.db import models





class VideoType(models.Model):
    name = models.CharField(max_length=50)


    def __str__(self):
        return "{0}".format(self.name)

# Create your models here.
class Video(models.Model):
    name = models.CharField(max_length=255)
    type = models.ForeignKey(VideoType, related_name = 'video_type', on_delete=models.CASCADE)

    def __str__(self):
        return "{0}".format(self.name)

class VideoClip(models.Model):
    video = models.ForeignKey(Video, related_name = 'video_for_clip', on_delete=models.CASCADE)
    start_time = models.CharField(max_length=15)
    end_time = models.CharField(max_length=15)
    subtitle_text = models.CharField(max_length=300)

    def __str__(self):
        return "{0} ||| {1}".format(self.video.name, self.subtitle_text)
