import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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

}

export interface SimpleAskDialogData {
  content: string;
  question: string;
}
