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
  selector: 'app-gif-creator',
  templateUrl: './gif-creator.component.html',
  styleUrls: ['./gif-creator.component.scss']
})
export class GifCreatorComponent implements OnInit {

  @ViewChild('canvas') canvas;

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
  maxImageIndex: number = 0;
  gifLink: string = '';
  gifTextOverlay: string = '';
  numLapse: number = 150;

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
    if (!this.videoService.videoSegments) {
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
    } else {
      this.segments = this.videoService.videoSegments;
      setTimeout(() => {
        this.addTextToMeme();
        this.addTextToMeme();
      }, 500)
    }

  }

  createGIF() {
    let minSegment = this.segments[this.minImageIndex];
    let maxSegment = this.segments[this.maxImageIndex];
    console.log(minSegment);
    console.log(maxSegment);

    let startTime = '00:' + minSegment.minutes + ':' + (minSegment.seconds.toString().indexOf('.') != -1 ? minSegment.seconds.toString().replace('.', ':') : minSegment.seconds + ':00');
    let endTime = '00:' + maxSegment.minutes + ':' + (maxSegment.seconds.toString().indexOf('.') != -1 ? maxSegment.seconds.toString().replace('.', ':') : maxSegment.seconds + ':00');
    this.searchService.createGIF(this.videoClip.video, startTime, endTime, this.gifTextOverlay).subscribe(x => {
      this.gifLink = x.gif_name;
    })
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
    this.segments = [];
    if (this.videoClip.start_minutes == this.videoClip.end_minutes) {
      let secondDiff = (this.videoClip.end_seconds - this.videoClip.start_seconds);
      let amountToSkip = this.numLapse / 1000
      for (let i = +this.videoClip.start_seconds; i < +this.videoClip.end_seconds; i += amountToSkip) {
        let vC = Object.assign({}, this.videoClip);
        let segment = { videoId: vC.video, minutes: vC.start_minutes, seconds: i, pictureUrl: '' };
        this.segments.push(segment);
      }

      for (let i = 0; i < this.segments.length; i++) {
        setTimeout(() => {
          this.getImage(this.segments[i], i);
        }, i * 100);
      }
    }
  }

  private getImage(segment: Segment, index) {
    this.pictureService.getImage(segment.videoId, segment.minutes, segment.seconds + '').subscribe(x => {
      this.createImageFromBlob(x, segment, index);
    })
  }

  createAnimation() {
    setTimeout(() => {
      if (this.minImageIndex != -1 && this.maxImageIndex != -1 && this.videoSegmentId >= this.maxImageIndex) {
        this.videoSegmentId = this.minImageIndex;
      } else if (this.videoSegmentId == this.segments.length - 1) {
        this.videoSegmentId = 0;
      } else {
        this.videoSegmentId++;
      }
      this.createAnimation();
      this.addTextToMeme();
    }, this.numLapse);
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

        if (index == 0) {
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
