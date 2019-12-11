import { Injectable } from '@angular/core';
import { VideoClip } from 'src/app/search/models/video-clip';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private _videoClip: VideoClip

  constructor() { }

  setVideoClip(videoClip: VideoClip) {
    this._videoClip = videoClip;
  }

  getVideoClip() {
    return this._videoClip;
  }
}
