import { Component, ViewEncapsulation } from '@angular/core';
import {PictureService} from "./shared/services/picture.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  pictureUrl;
  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    // this.pictureService.getImage().subscribe(x => {
    //   // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
    //   this.pictureUrl = this.createImageFromBlob(x);

    // })
  }

    createImageFromBlob(image: Blob) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.pictureUrl = 'data:image/jpg;base64,' + reader.result;
        console.log(this.pictureUrl);
      }, false);

      if (image) {
        reader.readAsText(image);
      }
    }
}
