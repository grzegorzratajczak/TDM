import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CarAttrs} from '../../cars/car';

@Component({
  selector: 'app-simple-ask-dialog',
  templateUrl: './simple-ask-dialog.component.html',
  styleUrls: ['./simple-ask-dialog.component.scss']
})
export class SimpleAskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SimpleAskDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: SimpleAskDialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface SimpleAskDialogData {
  content: CarAttrs;
  question: string;
}
