import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailService } from '../shared/services/detail-service.service';
import { VideoClip } from '../search/models/video-clip';
import { PictureService } from '../shared/services/picture.service';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/services/video.service';

export interface Segment {
  videoId: number;
  minutes: number;
  seconds: number;
  pictureUrl: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @ViewChild('canvas') canvas;

  videoClip: VideoClip;
  segments: Segment[] = [];
  memeText: string = '';
  height: string = '';
  width: string = '';

  segment: Segment = { videoId: 2, minutes: 1, seconds: 9, pictureUrl: '' };

  // public config = {
  //   ImageName: 'Some image',
  //   AspectRatios: ["4:3", "16:9"],
  //   ImageUrl: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
  //   ImageType: 'image/jpeg'
  // }

  constructor(public detailService: DetailService,
    public pictureService: PictureService,
    public activatedRoute: ActivatedRoute,
    public videoService: VideoService) {
    this.videoClip = detailService.getVideoClip();
  }

  ngOnInit() {
    if (this.videoClip) {
      this.getVideoSegments();
      this.checkPictureUrls();
    } else {
      let videoClipId = this.activatedRoute.snapshot.params['videoClip'];
      this.videoService.getVideoClip(videoClipId).subscribe(x => {
        this.videoClip = x;
        this.getVideoSegments();
        console.log(x);
      })
    }

    // this.getImage(this.segment);

    // let canvas: any = document.getElementById('canvasId');
    // let context = canvas.getContext('2d');

    // let imageObj = new Image();


    // imageObj.onload = function () {
    //   context.drawImage(imageObj, 0, 0);
    //   context.font = "40px Calibri";
    //   context.fillStyle = "red";
    //   context.fillText("My TEXT!", 50, 150);

    //   let canvas: any = document.getElementById('canvasId');
    //   let dataURL = canvas.toDataURL();

    //   alert(dataURL);
    // }
    // imageObj.setAttribute('crossOrigin', 'anonymous');
    // imageObj.src = "https://loremflickr.com/400/200";
  }

  close(event) {

  }

  getEditedFile(event) {

  }

  getVideoSegments() {
    if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
      let secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
      for (let i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += .5) {
        let vC = Object.assign({}, this.videoClip);
        let segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
        this.segments.push(segment);
      }

      for (let i = 0; i < this.segments.length; i++) {

        this.getImage(this.segments[i], i);
        // this.pictureService.getSpecificTime(this.segments[i].videoId, this.segments[i].minutes, this.segments[i].seconds).subscribe(x => {
        //   this.createImageFromBlob(x, this.segments[i]);
        //   console.log(x);
        // });
      }
    }
  }

  private getImage(segment: Segment, index) {
    this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(x => {
      // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
      this.createImageFromBlob(x, segment);
      // if (index == 0) {
      //   //  this.config.ImageUrl = segment.pictureUrl 
      //   let canvas = this.canvas.nativeElement;
      //   let context = canvas.getContext('2d')

      //   let imageObj = new Image();

      //   imageObj.onload = function () {

      //     // let canvas = document.getElementById('idCanvas');
      //     // let dataURL = canvas.toDataURL();
      //   }

      //   imageObj.setAttribute('crossOrigin', 'anonymous');
      //   imageObj.src = segment.pictureUrl;

      //   context.drawImage(imageObj, 0, 0);
      //   context.font = "40px Calibri";
      //   context.fillStyle = "red";
      //   context.fillText("My TEXT!", 50, 50);
      // }

      

    })
  }

  addTextToMeme() {
    let canvas: any = document.getElementById('canvasId');
      let context = canvas.getContext('2d');

      let imageObj = new Image();


      imageObj.onload = function () {
        this.width = imageObj.width;
        this.height = imageObj.height;
        context.drawImage(imageObj, 0, 0, this.width, this.height,
                                    0, 0, this.width, this.height);
        context.font = "40px Calibri";
        context.fillStyle = "red";
        context.fillText(this.memeText, 50, 350);

        let canvas: any = document.getElementById('canvasId');
        let dataURL = canvas.toDataURL();

        // alert(dataURL);
      }.bind(this);
      
      imageObj.setAttribute('crossOrigin', 'anonymous');
      imageObj.src = this.segments[0].pictureUrl;
  }

  download() {
    let link: any = document.createElement('a');
    link.download = 'filename.png';
    let element: any = document.getElementById('canvasId');
    link.href = element.toDataURL()
    link.click();
  }

  checkPictureUrls() {
    setTimeout(() => {
      this.checkPictureUrls();
      for (let i = 0; i < this.segments.length; i++) {
        for (let j = 0; j < this.segments.length; j++) {
          if (this.segments[i].pictureUrl == this.segments[i].pictureUrl) {
            console.log("They are the same");
          }
        }
      }

    }, 15000)
  }

  createImageFromBlob(image: Blob, segment: Segment) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      segment.pictureUrl = 'data:image/jpg;base64,' + reader.result;

    }, false);
    if (image) {
      reader.readAsText(image);
    }
  }




}
