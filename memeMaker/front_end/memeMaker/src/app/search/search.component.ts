import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { VideoClip } from './models/video-clip';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  videoClips: VideoClip[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.searchVideoClips(this.searchTerm).subscribe(clips => {
      this.videoClips = clips;
      console.log(this.videoClips);
    })
  }
}
 