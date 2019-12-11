import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  getVideoClip(videoClipId: Number) {
    // let url = `video/videoClip?videoClipId=${videoClipId}`;
    let url = `api/videos/videoClip/${videoClipId}`;
    return this.httpClient.get<any>(url);
  }
}
