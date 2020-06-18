import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { VideoClip } from './models/video-clip';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PictureService } from '../shared/services/picture.service';
import { MatDialog } from '@angular/material'
import { AdvancedSearchComponent, AdvancedSearchInfo } from './advanced-search/advanced-search.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('searchBox') searchInput

  advancedSearchInfo: AdvancedSearchInfo = new AdvancedSearchInfo();
  searchTerm: string;
  videoClips: VideoClip[];
  searchType: string;
  emotion: string;

  constructor(
    private searchService: SearchService,
    private pictureService: PictureService,
    private matDialog: MatDialog,
    private router: Router,
    private activated: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchTerm = this.activated.snapshot.params['term'];
    this.searchType = this.activated.snapshot.params['type'];
    if (this.searchTerm && this.searchType) {
      this.search();
    }

    this.activated.params.subscribe(params => {
      if (this.searchTerm != params['term'] || this.searchType != params['type'] || this.emotion != params['term']) {
        this.searchType = params['type'];
        if (this.searchType != 'Emotion')
          this.searchTerm = params['term'];
        else
          this.emotion = params['term'] 
        this.search();
      }
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      let source = fromEvent(this.searchInput.nativeElement, 'keyup');
      source.pipe(debounceTime(700)).subscribe(c => {
        console.log(c);
        if (this.searchTerm)
          this.router.navigate(['./search', this.searchType, this.searchTerm])
      }
      );
    }, 1000)
  }

  private getImage(videoClip: VideoClip) {
    this.pictureService.getImage(videoClip.video, videoClip.start_minutes, videoClip.time_of % 60 + '').subscribe(x => {
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

  showAdvancedSearch() {
    const dialogRef = this.matDialog.open(AdvancedSearchComponent, {
      width: '500px',
      height: '300px',
      data: { advancedSearchInfo: this.advancedSearchInfo },
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result)
        this.advancedSearchInfo = result;
    })
  }

  search() {
    if (this.searchType == "Subtitle" && this.searchTerm) {
      this.searchService.searchVideoClips(this.searchTerm).subscribe(clips => {
        this.getImages(clips);
      })
    } else if (this.searchType == "Person" && this.searchTerm) {
      this.searchService.searchByPerson(this.searchTerm).subscribe(clips => {
        this.getImages(clips)
      })
    } else if (this.searchType == "Object" && this.searchTerm) {
      this.searchService.searchByObject(this.searchTerm).subscribe(clips => {
        this.getImages(clips)
      })
    } else if (this.searchType == "Emotion" && this.emotion) {
      this.searchService.searchByEmotion(this.emotion).subscribe(clips => {
        this.getImages(clips)
        this.router.navigate(['./search', this.searchType, this.emotion])
      })
    }
  }

  private getImages(clips: VideoClip[]) {
    this.videoClips = clips;
    console.log(this.videoClips);
    for (let i = 0; i < this.videoClips.length; i++) {
      this.getImage(this.videoClips[i]);
    }
  }

  processVideo() {
    this.searchService.processVideo().subscribe(processing => {
      console.log(processing);
    })
  }
}
