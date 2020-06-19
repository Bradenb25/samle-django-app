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
    start_seconds = models.DecimalField(decimal_places=3, max_digits=6)
    start_minutes = models.IntegerField()
    end_seconds = models.DecimalField(decimal_places=3, max_digits=6)
    end_minutes = models.IntegerField()
    time_of = models.DecimalField(decimal_places=2, max_digits=6, default=0.00)
    items_found = models.CharField(max_length=200, default='')
    subtitle_text = models.CharField(max_length=300)

    def __str__(self):
        return "{0} ||| {1}".format(self.video.name, self.subtitle_text)


class Actor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return "{0}".format(self.name)


class ActorFrame(models.Model):
    actor = models.ForeignKey(Actor, related_name = 'actor_in_frame', on_delete=models.CASCADE)
    video = models.ForeignKey(Video, related_name="video_clip_name", on_delete=models.CASCADE)
    start_seconds = models.DecimalField(decimal_places=3, max_digits=6)

    def __str__(self):
        return "{0} {1} {2}".format(self.actor.name, self.video.name, self.start_seconds)


class ObjectType(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return "{0}".format(self.name)


class ObjectFrame(models.Model):
    object_type = models.ForeignKey(ObjectType, related_name='object_type_in_frame', on_delete=models.CASCADE)
    video = models.ForeignKey(Video, related_name="object_video", on_delete=models.CASCADE)
    start_seconds = models.DecimalField(decimal_places=3, max_digits=6)

    def __str__(self):
        return "{0} {1} {2}".format(self.object_type.name, self.video.name, self.start_seconds)

class Emotion(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return "{0}".format(self.name)

class EmotionFrame(models.Model):
    emotion = models.ForeignKey(Emotion, related_name='emotion_type', on_delete=models.CASCADE)
    video = models.ForeignKey(Video, related_name='emotion_video', on_delete=models.CASCADE)
    start_seconds = models.DecimalField(decimal_places=3, max_digits=6)

    def __str__(self):
        return "{0} {1} {2}".format(self.emotion.name, self.video.name, self.start_seconds)