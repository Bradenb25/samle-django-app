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
}
