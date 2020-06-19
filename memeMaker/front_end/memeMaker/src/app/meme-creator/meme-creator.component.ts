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
  selector: 'app-meme-creator',
  templateUrl: './meme-creator.component.html',
  styleUrls: ['./meme-creator.component.scss']
})
export class MemeCreatorComponent implements OnInit {

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

  constructor(public detailService: DetailService,
    public pictureService: PictureService,
    public activatedRoute: ActivatedRoute,
    public videoService: VideoService,
    private searchService: SearchService,
    private router: Router) {
    this.videoClip = detailService.getVideoClip();
  }

  ngOnInit() {
    if (this.videoClip) {
      this.getVideoSegments();
    } else {
      let videoClipId = this.activatedRoute.snapshot.params['videoClip'];
      this.videoService.getVideoClip(videoClipId).subscribe(x => {
        this.videoClip = x;
        this.getVideoSegments();
      })
    }
  }

  updateCurrentClip(id) {
    this.videoSegmentId = id;
    this.addTextToMeme();
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
      this.createImageFromBlob(x, segment, index);
    })
  }

  draw(ctx, canvas, texts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < texts.length; i++) {
      var text = texts[i];
      ctx.fillText(text.text, text.x, text.y);
    }
  }

  textHittest(x, y, textIndex, texts) {
    var text = texts[textIndex];
    return (x >= text.x &&
      x <= text.x + text.width &&
      y >= text.y - text.height &&
      y <= text.y);
  }

  handleMouseDown(e: any, startX: any, startY: any, offsetX: any, offsetY: any, selectedText: any, texts: any) {
    e.preventDefault();
    startX = parseInt(`${e.clientX - offsetX}`);
    startY = parseInt(`${e.clientY - offsetY}`);

    // Put your mousedown stuff here
    for (var i = 0; i < texts.length; i++) {
      if (this.textHittest(startX, startY, i, texts)) {
        selectedText = i;
      }
    }
  }

  handleMouseUp(e, selectedText) {
    e.preventDefault();
    selectedText = -1;
  }

  handleMouseOut(e, selectedText) {
    e.preventDefault();
    selectedText = -1;
  }

  handleMouseMove(e, selectedText, mouseX, mouseY, offsetX, offsetY, startX, startY, texts, ctx, canvas) {
    if (selectedText < 0) { return; }
    e.preventDefault();
    mouseX = parseInt(`${e.clientX - offsetX}`);
    mouseY = parseInt(`${e.clientY - offsetY}`);

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;

    var text = texts[selectedText];
    text.x += dx;
    text.y += dy;
    this.draw(ctx, canvas, texts);
  }

  addTextToMeme() {
    let canvas: any = document.getElementById('canvasId');
    let context = canvas.getContext('2d');

    let imageObj = new Image();





    // var canvasOffset = canvas.offset();
    // var offsetX = canvasOffset.left;
    // var offsetY = canvasOffset.top;
    // var scrollX = canvas.scrollLeft();
    // var scrollY = canvas.scrollTop();

    // var startX;
    // var startY;

    // // some text objects
    // var texts = [];

    // // some test texts
    // texts.push({ text: "Hello", x: 20, y: 20 });
    // texts.push({ text: "World", x: 20, y: 70 });

    // context.font = "16px verdana";
    // for (var i = 0; i < texts.length; i++) {
    //   var text = texts[i];
    //   text.width = context.measureText(text.text).width;
    //   text.height = 16;
    // }

    // var selectedText = -1;

    // // START: draw all texts to the canvas
    // this.draw(context, canvas, texts);




    // canvas.mousedown(function(e){this.handleMouseDown(e);});
    // canvas.mousemove(function(e){this.handleMouseMove(e);});
    // canvas.mouseup(function(e){this.handleMouseUp(e);});
    // canvas.mouseout(function(e){this.handleMouseOut(e);});




    imageObj.onload = function () {
      this.width = imageObj.width;
      this.height = imageObj.height;
      context.drawImage(imageObj, 0, 0, this.width, this.height,
        0, 0, this.width, this.height);
      context.font = this.fontSize + "px Calibri";
      context.fillStyle = this.color;
      // context.textAlign = 'center';
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
