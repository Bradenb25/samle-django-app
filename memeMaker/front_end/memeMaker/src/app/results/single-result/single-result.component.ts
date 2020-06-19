import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { VideoClip } from 'src/app/search/models/video-clip';
import { DetailService as DetailService } from 'src/app/shared/services/detail-service.service';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SingleResultComponent implements OnInit {

  @Input() videoClip: VideoClip

  constructor(public detailService: DetailService) { }

  ngOnInit() {
    console.log(this.videoClip.pictureUrl)
  }

  updateCurrentClip() {
    this.detailService.setVideoClip(this.videoClip);
  }

}
