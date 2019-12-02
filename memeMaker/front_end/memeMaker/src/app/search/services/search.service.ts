import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoClip } from '../models/video-clip';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  searchVideoClips(searchTerm: string) {
    let url = `api/videos/videoClip/?search=${searchTerm}`;
    return this._http.get<VideoClip[]>(url);
  }

  addArchiveVideo(videoTag: string) {
    let url = `api/videos/addArchive?videoTag=${videoTag}`;
    return this._http.get(url)
  }

  processVideo(videoTag: string = 'Trump_Supporters') {
    let url = `api/videos/processVideo?videoTag=${videoTag}`;
    return this._http.get(url);
  }
}
 