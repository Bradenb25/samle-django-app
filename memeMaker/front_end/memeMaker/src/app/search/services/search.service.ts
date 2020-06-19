import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoClip } from '../models/video-clip';
import { AddVideoComponent } from 'src/app/add-video/add-video.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  searchVideoClips(searchTerm: string) {
    let url = `api/videos/videoClip/?search=${searchTerm}`;
    return this._http.get<VideoClip[]>(url);
  }

  addArchiveVideo(videoTag: string = 'AKECARTOONWithEnglishSubtitles') {
    let url = `api/videos/addArchive?videoTag=${videoTag}`;
    return this._http.get(url)
  }

  processVideo(videoTag: string = 'AKECARTOONWithEnglishSubtitles') {
    let url = `api/videos/processVideo?videoTag=${videoTag}`;
    return this._http.get(url);
  }

  createGIF(videoId: number, startTime: string, endTime: string, gifTextOverlay: string = '') {
    let url = `api/videos/createGIF?video_id=${videoId}&start_time=${startTime}&end_time=${endTime}&text_overlay=${gifTextOverlay}`;
    return this._http.get<any>(url);
  }

  searchByPerson(personName: string) {
    let url = `api/videos/byActor?actorName=${personName}`;
    return this._http.get<VideoClip[]>(url);
  }

  searchByObject(objectName: string) {
    let url = `api/videos/byObject?objectType=${objectName}`;
    return this._http.get<VideoClip[]>(url);
  }

  searchByEmotion(emotion: string) {
    let url = `api/videos/byEmotion?emotion=${emotion}`;
    return this._http.get<VideoClip[]>(url);
  }
}
 