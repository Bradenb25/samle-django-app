import requests
from django.http import StreamingHttpResponse, HttpResponse
from django.contrib.auth.views import login_required
from django.shortcuts import get_object_or_404
from internetarchive import download

import os
import base64
import cv2
import pysrt

from videos.models import VideoType, Video, VideoClip


def addArchiveVideo(request):
    videoTag = request.GET.get('videoTag', '')
    download(videoTag)
    processVideo(videoTag)
    return HttpResponse()

def processVideo(request):
    videoTag = request.GET.get('videoTag', '')
    filename = videoTag + '/' + videoTag + '.asr.srt'
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
    milliseconds = (int(start_minutes) * 60 + float(start_seconds)) * 1000
    cap = cv2.VideoCapture(video.name + "/" + video.name + ".mp4")
    # cap.set(1, 100)
    cap.set(cv2.CAP_PROP_POS_MSEC, milliseconds)
    ret, frame = cap.read()
    cnt = cv2.imencode('.jpg', frame)
    # # print(cnt[1])
    my_string = base64.b64encode(cnt[1])
    print(my_string)

    return HttpResponse(my_string, content_type="image/gif")
    # return HttpResponse()




