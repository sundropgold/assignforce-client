import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../model/trainer';
import { Skill } from '../../model/skill';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  Skillz: Skill[] = [
    {
      skillId: 1,
      name: 'Java',
      active: true
    }
  ];
  trainers: Trainer[] = [
    {
      trainerId: 1,
      firstName: 'James',
      lastName: 'Smith',
      skills: this.Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume'
    },
    {
      trainerId: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      skills: this.Skillz,
      certifications: 'Certs',
      active: false,
      resume: 'Resume'
    },
    {
      trainerId: 3,
      firstName: 'Jon',
      lastName: 'Jones',
      skills: this.Skillz,
      certifications: 'Certs',
      active: false,
      resume: 'Resume'
    },
    {
      trainerId: 4,
      firstName: 'Daniel',
      lastName: 'Cormier',
      skills: this.Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume'
    }
  ];
  isManager = true;
  firstName;
  lastName;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addTrainer(): void {
    //add trainer

    const trainer: Trainer = {
      trainerId: 0,
      firstName: '',
      lastName: '',
      skills: Skill[1],
      certifications: '',
      active: true,
      resume: ''
    };
    const dialogRef = this.dialog.open(TrainersAddComponent, {
      width: '450px',
      data: {
        trainer: trainer
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //  this.addTrainer(result);
      }
    });
  }

  showCalendar() {}

  goToTrainer(trainer: Trainer) {}

  grabS3Resume(trainer: Trainer) {}
}
