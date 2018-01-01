import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TrainersComponent} from '../trainers/trainers.component';

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.css']
})
export class PtoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

//Used for the display of new Trainer dialog box
@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
})
export class CalendarDialogComponent {

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<CalendarDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    event.stopPropagation();
    this.dialogRef.close();
  }

  hideCalendar() {
    this.dialogRef.close();

  }

  showPTODialog() {
    const dialogRef = this.dialog.open(PtoDialogComponent, {
      // width: '450px',
    });

  }

}

@Component({
  selector: 'app-pto-dialog',
  templateUrl: './ptoRequestDialog.component.html',
})
export class PtoDialogComponent {

  constructor(public dialogRef: MatDialogRef<PtoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    event.stopPropagation();
    this.dialogRef.close();
  }
}

