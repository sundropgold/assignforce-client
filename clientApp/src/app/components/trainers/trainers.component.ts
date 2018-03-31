import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../model/Trainer';
import { Skill } from '../../model/Skill';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  [x: string]: any;
  Skillz: Skill[] = [
    {
      skillId: 1,
      name: 'Java',
      active: true
    }
  ];

  firstName;
  lastName;
  trainers;

  isManager = true;

  ngOnInit() {
    this.isManager = false;
    const Skillz: Skill[] = [
      {
        skillId: 1,
        name: 'Java',
        active: true
      }
    ];
    this.trainers = [
      {
        trainerId: 1,
        firstName: 'Mary',
        lastName: 'Poppins',
        skills: Skillz,
        certifications: 'Certs',
        active: true,
        resume: 'Resume'
      },
      {
        trainerId: 2,
        firstName: 'Moana',
        lastName: 'Motunui',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume'
      },
      {
        trainerId: 3,
        firstName: 'Vanellope',
        lastName: 'Von Schweetz',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume'
      },
      {
        trainerId: 4,
        firstName: 'Peter',
        lastName: 'Pan',
        skills: Skillz,
        certifications: 'Certs',
        active: true,
        resume: 'Resume'
      }
    ];
  }

  showCalendar() {}

  goToTrainer(trainer: Trainer) {}

  grabS3Resume(trainer: Trainer) {}

  constructor(public dialog: MatDialog) {}

  addTrainer(): void {
    //add trainer

    const trainer: Trainer = {
      trainerId: 0,
      firstName: '',
      lastName: '',
      skills: Skill[1],
      certifications: '',
      active: true,
      resume: '',
      unavailabilities: []
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

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }
}
