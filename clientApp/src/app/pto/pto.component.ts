import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.css']
})
export class PtoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//Used for the display of new Trainer dialog box
@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
})
export class CalendarDialogComponent {

  constructor(public dialogRef: MatDialogRef<CalendarDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    event.stopPropagation();
    this.dialogRef.close();
  }


}

