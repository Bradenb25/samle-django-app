import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { VideoClip } from 'src/app/search/models/video-clip';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchResultsComponent implements OnInit {

  @Input() videoClips: VideoClip[]

  constructor() { }

  ngOnInit() {
  }

}
