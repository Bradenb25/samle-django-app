import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  videoTag: string = '';
  videoProcessed: boolean = false;
  processVideoTag: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  addVideo() {
    this.videoProcessed = false;
    this.searchService.addArchiveVideo(this.videoTag).subscribe(x => {
      console.log(x);
      this.videoProcessed = true;
    })
  }

  processVideo() {
    this.searchService.processVideo(this.processVideoTag).subscribe(x => {
      console.log(x);
    })
  }

  createGIF(value) {
    this.searchService.createGIF(value, '00:01:20:500', '00:01:21:500').subscribe(x => {

    });
  }
}
 