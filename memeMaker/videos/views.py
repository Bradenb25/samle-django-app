import requests
from django.http import StreamingHttpResponse, HttpResponse
from django.contrib.auth.views import login_required

import os
import base64


@login_required
def download(request):
    # handle user custom user permissions
    # url = 'http://127.0.0.1:8000/static/videos/trump.jpg'
    # filename = os.path.basename(url)
    # print(filename)
    # r = requests.get(url, stream=True)
    # response = StreamingHttpResponse(streaming_content=r)
    # response['Content-Disposition'] = f'attachement; filename="{filename}"'
    # return response
    with open("./static/videos/trump.jpg", "rb") as img_file:
        my_string = base64.b64encode(img_file.read())
    return HttpResponse(my_string, content_type="image/gif")

