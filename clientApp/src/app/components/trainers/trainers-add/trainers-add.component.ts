import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry } from '@angular/material';
import { Trainer } from '../../../model/trainer';
import { Skill } from '../../../model/skill';
@Component({
  selector: 'app-trainers-add',
  templateUrl: './trainers-add.component.html',
  styleUrls: ['./trainers-add.component.css']
})
export class TrainersAddComponent {
  Skillz: Skill[] = [];
  trainer: Trainer = {
    trainerId: 0,
    firstName: '',
    lastName: '',
    skills: this.Skillz,
    certifications: '',
    active: true,
    resume: ''
  };
  data = {
    trainer: this.trainer
  };
  constructor(public dialogRef: MatDialogRef<TrainersAddComponent>, @Inject(MAT_DIALOG_DATA) public dataP: any) {
    console.log('check');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
