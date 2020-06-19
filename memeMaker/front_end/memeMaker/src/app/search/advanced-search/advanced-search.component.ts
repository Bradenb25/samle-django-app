import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export class AdvancedSearchInfo {
  byObject: boolean
  byActor: boolean
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  advancedSearchInfo: AdvancedSearchInfo = new AdvancedSearchInfo();

  constructor(public dialogRef: MatDialogRef<AdvancedSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.advancedSearchInfo = this.data.advancedSearchInfo;
    
  }

  done() {
    this.dialogRef.close(this.advancedSearchInfo)
  }
}
