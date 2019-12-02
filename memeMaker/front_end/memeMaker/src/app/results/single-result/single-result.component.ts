import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SingleResultComponent implements OnInit {

  @Input() videoClip

  constructor() { }

  ngOnInit() {
  }

}
