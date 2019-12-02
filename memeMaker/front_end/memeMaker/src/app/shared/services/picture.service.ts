import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private pictureUrl: string;
  private uploadPictureUrl: string;
  private getPictureUrl: string;

  constructor(private _http: HttpClient, private _sanitizer: DomSanitizer) {
    this.pictureUrl = `/user/search?name=`;
    this.uploadPictureUrl = `/upload`;
    this.getPictureUrl = `/user/profile-pic?username=`;
  }

  getImage(videoId: number, startMinutes: number, startSeconds: number) {
    return this._http.get<any>(`api/videos/download?videoId=${videoId}&startMinutes=${startMinutes}&startSeconds=${startSeconds}`, {headers: null, responseType: 'blob' as 'json'});
  }

  getPictureFromBuffer(buffer: any) {
    var getImageResult = buffer;
    var binstr = Array.prototype.map.call(getImageResult.data, function (ch) {
      return String.fromCharCode(ch);
    }).join('');
    let data = btoa(binstr);
    let picture = "data:image/jpg;base64," + data;
    return this._sanitizer.bypassSecurityTrustUrl(picture);
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let pictureUrl = 'data:image/jpg;base64,' + reader.result;
      console.log(this.pictureUrl);
      return pictureUrl
    }, false);

    if (image) {
      reader.readAsText(image);
    }
  }

}


