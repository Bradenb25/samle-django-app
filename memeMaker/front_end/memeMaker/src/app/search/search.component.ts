import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { VideoClip } from './models/video-clip';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PictureService } from '../shared/services/picture.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchBox') searchInput

  searchTerm: string;
  videoClips: VideoClip[];

  constructor(
    private searchService: SearchService,
    private pictureService: PictureService
    ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let source = fromEvent(this.searchInput.nativeElement, 'keyup');
      source.pipe(debounceTime(1200)).subscribe(c => {
        console.log(c);
        if (this.searchTerm)
          this.search();
      }
      );
    },1000)
  }

  private getImage(videoClip: VideoClip) {
    this.pictureService.getImage(videoClip.video, videoClip.start_minutes, videoClip.start_seconds).subscribe(x => {
      // this.pictureUrl = this.pictureService.getPictureFromBuffer(x);
      this.createImageFromBlob(x, videoClip);

    })
  }

  createImageFromBlob(image: Blob, videoClip: VideoClip) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      videoClip.pictureUrl = 'data:image/jpg;base64,' + reader.result;
      console.log(videoClip.pictureUrl);
    }, false);

    if (image) {
      reader.readAsText(image);
    }
  }

  search() {
    // this.searchService.addArchiveVideo(this.searchTerm).subscribe(clips => {
    //   // this.videoClips = clips;
    //   console.log(clips);
    // })
    this.searchService.searchVideoClips(this.searchTerm).subscribe(clips => {
      this.videoClips = clips;
      console.log(this.videoClips);
      for (let i = 0; i < this.videoClips.length; i++) {
        this.getImage(this.videoClips[i]);
      }
    })
  }

  processVideo() {
    this.searchService.processVideo().subscribe(processing => {
      console.log(processing);
    })
  }
}
