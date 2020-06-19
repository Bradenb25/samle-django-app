import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailService } from '../shared/services/detail-service.service';
import { VideoClip } from '../search/models/video-clip';
import { PictureService } from '../shared/services/picture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../shared/services/video.service';
import { SearchService } from '../search/services/search.service';

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

  timeOf: number;
  videoClip: VideoClip;
  segments: Segment[] = [];
  memeText: string = '';
  height: string = '';
  width: string = '';
  fontSize: number = 26;
  textHeight: number = 0;
  color: string = 'white'
  videoSegmentId: number = 0;
  minImageIndex: number = -1;
  maxImageIndex: number = -1;
  gifLink: string = '';

  segment: Segment = { videoId: 2, minutes: 1, seconds: 9, pictureUrl: '' };

  constructor(public detailService: DetailService,
    public pictureService: PictureService,
    public activatedRoute: ActivatedRoute,
    public videoService: VideoService,
    private searchService: SearchService,
    private router: Router) {
    this.videoClip = detailService.getVideoClip();
  }

  ngOnInit() {
    this.timeOf = +this.activatedRoute.snapshot.params['timeOf'];
    if (this.videoClip) {
      this.getVideoSegments();
    } else {
      let videoClipId = this.activatedRoute.snapshot.params['videoClip'];
      this.videoService.getVideoClip(videoClipId).subscribe(x => {
        this.videoClip = x;
        this.getVideoSegments();
        // console.log(x);
      })
    }
  }

  createGIF() {
    this.videoService.videoSegments = this.segments;
    this.router.navigate(['./create-gif'], { relativeTo: this.activatedRoute });
    this.detailService.setVideoClip(this.videoClip)
  }

  createMeme() {
    this.router.navigate(['./create-meme'], { relativeTo: this.activatedRoute });
  }

  updateImageIndexes(i) {
    if (this.minImageIndex == -1) {
      this.minImageIndex = i;
      this.maxImageIndex = i;
    } else if (i > this.minImageIndex) {
      this.maxImageIndex = i;
    } else if (i < this.minImageIndex) {
      this.minImageIndex = i;
      this.maxImageIndex = i;
    } else if (i == this.minImageIndex) {
      this.minImageIndex = -1;
      this.maxImageIndex = -1;
    }
  }

  updateCurrentClip(id) {
    this.videoSegmentId = id;
    this.addTextToMeme();
  }

  navigateToMemeCreation() {
    this.router.navigate(['create-meme' + this.videoClip.video]);
  }

  close(event) {

  }

  getEditedFile(event) {

  }

  getVideoSegments() {
    if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
      let secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
      for (let i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += .2) {
        let vC = Object.assign({}, this.videoClip);
        let segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
        this.segments.push(segment);
      }

      for (let i = 0; i < this.segments.length; i++) {

        this.getImage(this.segments[i], i);
      }
    }
  }

  private getImage(segment: Segment, index) {
    this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(x => {
      // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
      this.createImageFromBlob(x, segment, index);
      let time = segment.minutes * 60 + segment.seconds;
      let time1 = +time.toFixed(2)
      let time2 = +this.timeOf.toFixed(2)
      if (time1 - time2 == 0) {
        // this.videoSegmentId = index;
        // this.addTextToMeme();
        // setTimeout(() => {
        //   this.addTextToMeme();
        // })
      }
    })
  }

  createAnimation() {
    setTimeout(() => {
      if (this.videoSegmentId == this.segments.length - 1) {
        this.videoSegmentId = 0;
      } else {
        this.videoSegmentId++;
      }
      this.createAnimation();
      this.addTextToMeme();
    }, 100);
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
      context.font = this.fontSize + "px Calibri";
      context.fillStyle = this.color;
      this.textHeight = this.height - this.fontSize;
      let lines = this.getLines(context, this.memeText, this.width - 100);
      for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], 50, this.height - ((lines.length - i) * (this.fontSize * 1.2)))
      }
      let canvas: any = document.getElementById('canvasId');
      let dataURL = canvas.toDataURL();
    }.bind(this);

    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.src = this.segments[this.videoSegmentId].pictureUrl;
  }

  getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }


  download() {
    let link: any = document.createElement('a');
    link.download = 'filename.png';
    let element: any = document.getElementById('canvasId');
    link.href = element.toDataURL()
    link.click();
  }

  createImageFromBlob(image: Blob, segment: Segment, index: number) {
    if (image.size) {
      let reader = new FileReader();
      reader.addEventListener("load", () => { 

        segment.pictureUrl = 'data:image/jpg;base64,' + reader.result;

        let time = segment.minutes * 60 + segment.seconds;
        let time1 = +time.toFixed(4)
        let time2 = +this.timeOf.toFixed(4)
        if (time1 - time2 == 0) {
          // if (index == 0) {
          this.videoSegmentId = index;
          this.addTextToMeme();
          setTimeout(() => {
            this.addTextToMeme();
          })
        }
      }, false);
      if (image) {
        reader.readAsText(image); 
      }
    }
  }
}
