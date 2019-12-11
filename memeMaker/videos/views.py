import json

import requests
from django.http import StreamingHttpResponse, HttpResponse
from django.contrib.auth.views import login_required
from django.shortcuts import get_object_or_404
from internetarchive import download as archdownload

import os
import base64
import cv2
import pysrt

from videos.models import VideoType, Video, VideoClip


def addArchiveVideo(request):
    # json.dumps(vars(request))
    videoTag = request.GET.get('videoTag', '')

    if not os.path.exists(videoTag):
        archdownload(videoTag)
        processVideo(videoTag)
    return HttpResponse()

def processVideo(videoTag):

    srtName = ''
    for root, dirs, files in os.walk(videoTag):
        for file in files:
            if file.endswith(".srt"):
                srtName = file
    # if not os.path.exists(videoTag):
    if 1:
        filename = videoTag + '/' + srtName
        subs = pysrt.open(filename)
        videoTypes = VideoType.objects.all()
        video = Video()
        video.name = videoTag
        video.type = videoTypes[0]
        video.save()
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
        return HttpResponse()


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
    # cap.set(1, 100)
    cap.set(cv2.CAP_PROP_POS_MSEC, milliseconds)
    ret, frame = cap.read()
    cnt = cv2.imencode('.jpg', frame)
    # # print(cnt[1])
    my_string = base64.b64encode(cnt[1])
    print(my_string)

    return HttpResponse(my_string, content_type="image/gif")
    # return HttpResponse()


def downloadSpecificTime(request):
    videoId = request.GET.get('videoId', '')
    start_minutes = request.GET.get('startMinutes', '')
    start_seconds = request.GET.get('startSeconds', '')

    video = get_object_or_404(Video, pk=videoId)
    milliseconds = (int(start_minutes) * 60 + float(start_seconds)) * 1000
    cap = cv2.VideoCapture(video.name + "/" + video.name + ".mp4")
    cap.set(cv2.CAP_PROP_POS_MSEC, 0)
    print(start_seconds)
    print(milliseconds)
    ret, frame = cap.read()
    cnt = cv2.imencode('.jpg', frame)
    my_string = base64.b64encode(cnt[1])
    print(my_string[1000:1100])
    print(my_string[2000:2100])
    print(my_string[3000:3100])
    return HttpResponse(my_string, content_type="image/gif")

