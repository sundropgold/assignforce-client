import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry } from '@angular/material';
@Component({
  selector: 'app-trainers-add',
  templateUrl: './trainers-add.component.html',
  styleUrls: ['./trainers-add.component.css']
})
export class TrainersAddComponent  {

  constructor(  public dialogRef: MatDialogRef<TrainersAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
