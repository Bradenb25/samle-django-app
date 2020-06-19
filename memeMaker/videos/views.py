import json
import pickle
from decimal import Decimal
from sqlite3.dbapi2 import Date
import cvlib as cv
import requests
from django.forms import model_to_dict
from django.http import StreamingHttpResponse, HttpResponse, JsonResponse
from django.contrib.auth.views import login_required
from django.shortcuts import get_object_or_404
from internetarchive import download as archdownload
from moviepy.editor import *
from rest_framework.renderers import JSONRenderer

from .serializers import VideoClipSerializer, EmotionFrameSerializer
from.PersonRecognition import PersonRecognition
from .EmotionRecognition import EmotionRecognition

import os
import base64
import cv2
import pysrt

from .models import VideoType, Video, VideoClip, ActorFrame, Actor, ObjectType, ObjectFrame, Emotion, EmotionFrame


def addArchiveVideo(request):
    # json.dumps(vars(request))
    videoTag = request.GET.get('videoTag', '')

    if not os.path.exists(videoTag):
        print("hi")
        archdownload(videoTag)

    # processVideo(videoTag)
    # processActors(videoTag)
    # processObjects(videoTag)
    processEmotions(videoTag)

    return HttpResponse()

def get_video_or_create(videoTag):
    video = Video.objects.filter(name=videoTag)
    print(video)
    if video.exists():
        video = video[0]
    else:
        videoTypes = VideoType.objects.all()
        video = Video()
        video.name = videoTag
        video.type = videoTypes[0]
        video.save()

    return video

def processObjects(videoTag):
    srtName = ''
    # videoTag = request.GET.get('videoTag', '')
    for root, dirs, files in os.walk(videoTag):
        for file in files:
            if file.endswith(".mp4"):
                srtName = file

    video = get_video_or_create(videoTag)

    filename = videoTag + '/' + srtName

    cap = cv2.VideoCapture(filename)
    frameRate = cap.get(cv2.CAP_PROP_FPS)
    currentFrameNumber = 0

    currentSecond = 0
    while cap.isOpened():
        ret, frame = cap.read()

        if ret:
            # cv2.imwrite('frame{:d}.jpg'.format(count), frame)# print(frame)
            bbox, label, conf = cv.detect_common_objects(image=frame, confidence=.75)
            labels = list(set(label))

            if len(labels) > 0:
                for name in labels:
                    print(name)
                    type = ObjectType.objects.filter(name=name)
                    if type.exists():
                        print("Type Exists {0} {1} {2}".format(type[0], video.name, currentSecond))
                        object_frame_exist = ObjectFrame.objects.filter(object_type=type[0], video=video, start_seconds=currentSecond)
                        print(list(object_frame_exist))
                        if len(list(object_frame_exist)) is 0:
                            print("Object frame doesn't exist yet")
                            object_frame = ObjectFrame()
                            object_frame.object_type = type[0]
                            object_frame.video = video
                            object_frame.start_seconds = currentSecond
                            object_frame.save()
                        else:
                            print("Object frame already exists")
                    else:
                        print("Object Type doesn't exist yet")
                        object_type = ObjectType()
                        object_type.name = name
                        object_type.save()
                        object_frame = ObjectFrame()
                        object_frame.object_type = object_type
                        object_frame.video = video
                        object_frame.start_seconds = currentSecond
                        object_frame.save()

            currentFrameNumber += frameRate
            currentSecond += 1
            cap.set(1, currentFrameNumber)
        else:
            cap.release()
            break

def processEmotions(videoTag):
    # dbfile = open('image_pickle', 'rb')
    # face = pickle.load(dbfile)
    # print(EmotionRecognition().get_emotion(face))
    srtName = ''
    # videoTag = request.GET.get('videoTag', '')
    for root, dirs, files in os.walk(videoTag):
        for file in files:
            if file.endswith(".mp4"):
                srtName = file

    video = get_video_or_create(videoTag)

    filename = videoTag + '/' + srtName

    cap = cv2.VideoCapture(filename)
    frameRate = cap.get(cv2.CAP_PROP_FPS)
    currentFrameNumber = 0

    emotionRecognizer = EmotionRecognition()
    currentSecond = 0

    while cap.isOpened():
        ret, frame = cap.read()

        if ret:
            print("Current second: ", currentSecond)
            cv2.imwrite('frame{:d}.jpg'.format(currentSecond), frame)  # print(frame)
            emotions = emotionRecognizer.get_emotions_from_image(frame)
            if len(emotions) > 0:
                for emotion_name in emotions:
                    emotions = Emotion.objects.filter(name=emotion_name)
                    if emotions.exists():
                        emotion_frame_exists = EmotionFrame.objects.filter(emotion=emotions[0], video=video, start_seconds=currentSecond)
                        if not emotion_frame_exists:
                            emotion_frame = EmotionFrame()
                            emotion_frame.emotion = emotions[0]
                            emotion_frame.video = video
                            emotion_frame.start_seconds = currentSecond
                            emotion_frame.save()
                    else:
                        emotion = Emotion()
                        emotion.name = emotion_name
                        emotion.save()
                        emotion_frame = EmotionFrame()
                        emotion_frame.emotion = emotion
                        emotion_frame.video = video
                        emotion_frame.start_seconds = currentSecond
                        emotion_frame.save()

            currentFrameNumber += frameRate
            currentSecond += 1
            cap.set(1, currentFrameNumber)
        else:
            cap.release()
            break

def processActors(videoTag):
    srtName = ''
    # videoTag = request.GET.get('videoTag', '')
    for root, dirs, files in os.walk(videoTag):
        for file in files:
            if file.endswith(".mp4"):
                srtName = file

    video = get_video_or_create(videoTag)

    filename = videoTag + '/' + srtName

    cap = cv2.VideoCapture(filename)
    frameRate = cap.get(cv2.CAP_PROP_FPS)
    currentFrameNumber = 0

    personRecognizer = PersonRecognition('./videos/known-people')
    currentSecond = 0
    while cap.isOpened():
        ret, frame = cap.read()

        if ret:
            # cv2.imwrite('frame{:d}.jpg'.format(count), frame)# print(frame)

            person_names = personRecognizer.get_actors_in_image(frame)
            if len(person_names) > 0:
                for name in person_names:
                    actor = Actor.objects.filter(name=name)
                    if actor.exists():
                        actor_frame_exist = ActorFrame.objects.filter(actor=actor[0], video=video, start_seconds=currentSecond)
                        if not actor_frame_exist.exists:
                            actor_frame = ActorFrame()
                            actor_frame.actor = actor[0]
                            actor_frame.video = video
                            actor_frame.start_seconds = currentSecond
                            actor_frame.save()
                            print(name)
                            # cv2.imwrite(f'./videos/predicted-people/frame{currentFrameNumber}{name}.jpg', frame)  # print(frame)
                    else:
                        actor = Actor()
                        actor.name = name
                        actor.save()
                        actor_frame = ActorFrame()
                        actor_frame.actor = actor
                        actor_frame.video = video
                        actor_frame.start_seconds = currentSecond
                        actor_frame.save()

                        print(name)
                        # cv2.imwrite(f'./videos/predicted-people/frame{currentFrameNumber}{name}.jpg', frame)  # print(frame)

            currentFrameNumber += frameRate
            currentSecond += 1
            cap.set(1, currentFrameNumber)
        else:
            cap.release()
            break

def processVideo(videoTag):
    # videoType = VideoType()
    # videoType.name = 'basic'
    # videoType.save()
    srtName = ''
    print("Processing Video")
    # videoTag = request.GET.get('videoTag', '')
    for root, dirs, files in os.walk(videoTag):
        for file in files:
            if file.endswith(".srt"):
                srtName = file
    # if not os.path.exists(videoTag):

    video = get_video_or_create(videoTag)
    if srtName is not '':
        print("Here for some reason")
        filename = videoTag + '/' + srtName
        subs = pysrt.open(filename)
        for sub in subs:
            videoClip = VideoClip()
            videoClip.video = video
            videoClip.start_minutes = sub.start.minutes
            videoClip.start_seconds = sub.start.seconds
            videoClip.end_minutes = sub.end.minutes
            videoClip.end_seconds = sub.end.seconds
            videoClip.subtitle_text = sub.text
            videoClip.save()
        return HttpResponse(subs)
    else:
        total_seconds = get_duration_of_video(videoTag)
        current_second = 0
        while current_second <= total_seconds:
            videoClip = VideoClip()
            videoClip.video = video
            videoClip.start_minutes = int(current_second / 60)
            videoClip.start_seconds = current_second % 60

            if current_second > total_seconds:
                current_second = total_seconds
            else:
                current_second += 10

            videoClip.end_minutes = int(current_second / 60)
            videoClip.end_seconds = current_second % 60
            videoClip.subtitle_text = ''
            videoClip.save()

        return HttpResponse()

def get_duration_of_video(video_tag):
    srt_name = ''
    for root, dirs, files in os.walk(video_tag):
        for file in files:
            if file.endswith(".mp4"):
                srt_name = file

    cap = cv2.VideoCapture(video_tag + '/' + srt_name)
    fps = cap.get(cv2.CAP_PROP_FPS)  # OpenCV2 version 2 used "CV_CAP_PROP_FPS"
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = frame_count / fps

    cap.release()
    return duration

# @login_required
def download(request):
    # handle user custom user permissions
    # url = 'http://127.0.0.1:8000/static/videos/trump.jpg'
    # filename = os.path.basename(url)
    # print(filename)
    # r = requests.get(url, stream=True)
    # response = StreamingHttpResponse(streaming_content=r)
    # response['Content-Disposition'] = f'attachement; filename="{filename}"'
    # return response
    videoId = request.GET.get('videoId', '')
    video = get_object_or_404(Video, pk=videoId)
    start_minutes = request.GET.get('startMinutes', '')
    start_seconds = request.GET.get('startSeconds', '')
    # with open("./static/videos/trump.jpg", "rb") as img_file:
    #     my_string = base64.b64encode(img_file.read())
    # print(start_seconds)

    mp4Name = ''
    for root, dirs, files in os.walk(video.name):
        for file in files:
            if file.endswith(".mp4"):
                mp4Name = file

    milliseconds = (int(start_minutes) * 60 + float(start_seconds)) * 1000
    cap = cv2.VideoCapture(video.name + "/" + mp4Name)
    cap.set(cv2.CAP_PROP_POS_MSEC, milliseconds)
    ret, frame = cap.read()
    if frame is not None and len(frame) > 0:
        cnt = cv2.imencode('.jpg', frame)
        my_string = base64.b64encode(cnt[1])
        return HttpResponse(my_string, content_type="image/gif")
    else:
        print("FRAME IS EMPTY **********************************************")
        return HttpResponse("", content_type="text/plain")


def downloadSpecificTime(request):
    videoId = request.GET.get('videoId', '')
    start_minutes = request.GET.get('startMinutes', '')
    start_seconds = request.GET.get('startSeconds', '')

    video = get_object_or_404(Video, pk=videoId)
    milliseconds = (int(start_minutes) * 60 + float(start_seconds)) * 1000
    cap = cv2.VideoCapture(video.name + "/" + video.name + ".mp4")
    cap.set(cv2.CAP_PROP_POS_MSEC, 0)
    ret, frame = cap.read()
    cnt = cv2.imencode('.jpg', frame)
    my_string = base64.b64encode(cnt[1])
    return HttpResponse(my_string, content_type="image/gif")


def create_gif(request):
    video_file = ''

    video_id = request.GET.get('video_id', '')
    start_time = request.GET.get('start_time', '')
    end_time = request.GET.get('end_time', '')
    gif_text = request.GET.get('text_overlay', '')
    start_time_hour, start_time_minute, start_time_seconds, start_time_milliseconds = start_time.split(':')
    end_time_hour, end_time_minute, end_time_seconds, end_time_milliseconds = end_time.split(':')

    end_time = request.GET.get('end_time', '')
    video = get_object_or_404(Video, pk=video_id)
    for root, dirs, files in os.walk(video.name):
        for file in files:
            if file.endswith(".mp4"):
                video_file = file

    file_name = video.name + '/' + video_file

    # clip = (VideoFileClip(file_name)
    #         .subclip((int(start_time_minute), float(start_time_seconds + '.' + start_time_milliseconds)),
    #                  (int(end_time_minute), float(end_time_seconds + '.' + end_time_milliseconds)))
    #         .resize(0.7)
    #         )
    #
    # w, h = clip.size
    #
    # clip_text = TextClip(gif_text, font='Amiri-regular', color='white', fontsize=24)
    #
    # # clip_text = clip_text.on_color(size=(clip.w + clip_text.w, clip_text.h - 10),
    # #                    color='white', fontsize=24)
    #
    # clip_text = clip_text.set_position(lambda t: max(w/30, int(w-0.5*w*t),
    #                                 max(5*h/6, int(100*t))))
    #
    # final = CompositeVideoClip([clip, clip_text])
    # new_video_name = video.name + '_' + start_time.replace(':', '_') + '_' + end_time.replace(':', '_') + '.gif'
    # final.write_gif('./static/gifs/' + new_video_name)

    clip = (VideoFileClip(file_name)
            .subclip((int(start_time_minute), float(start_time_seconds + '.' + start_time_milliseconds)),
                     (int(end_time_minute), float(end_time_seconds + '.' + end_time_milliseconds)))
            .resize(0.7)
            )
    new_video_name = video.name + '_' + start_time.replace(':', '_') + '_' + end_time.replace(':', '_') + '.gif'
    clip.write_gif('./static/gifs/' + new_video_name)
    return HttpResponse('{ "gif_name": ' + '"' + new_video_name + '" }', content_type="application/json")


def get_clips_by_actor(request):
    actor_name = request.GET.get('actorName', '')
    print(actor_name)

    actors = list(Actor.objects.filter(name__contains=actor_name))

    actorFrames = []
    for actor in actors:
        actorFrames.append(list(ActorFrame.objects.filter(actor=actor)))
    actorFrames = [item for sublist in actorFrames for item in sublist]
    print(len(actorFrames))
    print(actorFrames)
    clips = []
    for actorFrame in actorFrames:
        print(actorFrame)
        clip = get_clip(actorFrame.start_seconds, actorFrame.video)
        print("NUMBER OF CLIPS: ", len(clip))
        if len(clip):
            for c in clip:
                print("Item *********", actorFrame.actor.name)
                c.items_found = set()
                c.items_found.add(actorFrame.actor.name)
                print("ITEMS: ", c.items_found)
                print("TIME OF HERE: ", c.time_of)
                clips.append(c)
    print(actors)

    clips_already_in = set()
    clips_dictionary = {}
    for clip in clips:
        print("CLIP TIME OF: ", clip.time_of)
        if clip.id not in clips_already_in:
            # print("----------------------------: ", clip.items_found)
            clips_dictionary[clip.id] = clip
            clips_already_in.add(clip.id)
        else:
            if clip.items_found:
                clips_dictionary[clip.id].items_found.add(clip.items_found.pop())

    new_clips = []
    for key, value in clips_dictionary.items():
        value.items_found = ", ".join(list(value.items_found))
        new_clips.append(value)

    data = VideoClipSerializer(new_clips, many=True).data
    json = JSONRenderer().render(data)
    return HttpResponse(json, content_type='application/json')

def get_clips_by_emotion(request):
    emotion = request.GET.get('emotion', '')

    emotions = list(Emotion.objects.filter(name__contains=emotion))

    emotion_frames = []
    for frame in emotions:
        emotion_frames.append(list(EmotionFrame.objects.filter(emotion=frame)))

    emotion_frames = [item for sublist in emotion_frames for item in sublist]

    clips = []
    for emotion_frame in emotion_frames:
        clip = get_clip(emotion_frame.start_seconds, emotion_frame.video)

        if len(clip):
            for c in clip:
                c.items_found = set()
                c.items_found.add(emotion_frame.emotion.name)
                clips.append(c)

    clips_already_in = set()
    clips_dictionary = {}
    for clip in clips:
        if clip.id not in clips_already_in:
            # print("----------------------------: ", clip.items_found)
            clips_dictionary[clip.id] = clip
            clips_already_in.add(clip.id)
        else:
            if clip.items_found:
                clips_dictionary[clip.id].items_found.add(clip.items_found.pop())

    new_clips = []
    for key, value in clips_dictionary.items():
        value.items_found = ", ".join(list(value.items_found))
        new_clips.append(value)

    print("CLIPS: ", new_clips)
    data = VideoClipSerializer(new_clips, many=True).data
    json = JSONRenderer().render(data)
    return HttpResponse(json, content_type='application/json')

def get_clips_by_object(request):
    object_type = request.GET.get('objectType', '')
    print(object_type)

    objects = list(ObjectType.objects.filter(name__contains=object_type))

    object_frames = []
    for object in objects:
        object_frames.append(list(ObjectFrame.objects.filter(object_type=object)))
    object_frames = [item for sublist in object_frames for item in sublist]
    # print(len(object_frames))
    # print(object_frames)
    clips = []
    for object_frame in object_frames:
        print(object_frame)
        clip = get_clip(object_frame.start_seconds, object_frame.video)

        if len(clip):
            for c in clip:
                print("Item *********", object_frame.object_type.name)
                c.items_found = set()
                c.items_found.add(object_frame.object_type.name)
                print("ITEMS: ", c.items_found)
                clips.append(c)
    # print(objects)

    # clips = [clip for sublist in clips for clip in sublist]
    clips_already_in = set()
    clips_dictionary = {}
    for clip in clips:
        if clip.id not in clips_already_in:
            # print("----------------------------: ", clip.items_found)
            clips_dictionary[clip.id] = clip
            clips_already_in.add(clip.id)
        else:
            if clip.items_found:
                clips_dictionary[clip.id].items_found.add(clip.items_found.pop())

    new_clips = []
    for key, value in clips_dictionary.items():
        value.items_found = ", ".join(list(value.items_found))
        new_clips.append(value)

    data = VideoClipSerializer(new_clips, many=True).data
    json = JSONRenderer().render(data)
    return HttpResponse(json, content_type='application/json')

def get_clip(time_in_seconds, video):
    minutes = int(time_in_seconds / 60)
    seconds = time_in_seconds - 60 * minutes
    print("TIME IN SECONDS ", time_in_seconds)
    print("\nMinutes: ", minutes)
    print("Seconds: ", seconds)
    video_clip = VideoClip.objects.filter(video=video,
                                          start_seconds__lte=Decimal(seconds),
                                          start_minutes__lte=minutes,
                                          end_seconds__gte=Decimal(seconds),
                                          end_minutes__gte=minutes
                                          )

    print("number of videos", len(video_clip))

    if len(video_clip) > 0:
        for i in range(len(video_clip)):
            print('here 1')
            print(video_clip[i])
            print('here2')
            video_clip[i].time_of = time_in_seconds
            print("Time of: ", video_clip[i].time_of)

    return video_clip
