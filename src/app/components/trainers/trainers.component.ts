import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../model/Trainer';
import { Skill } from '../../model/Skill';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  [x: string]: any;

  firstName;
  lastName;
  trainers: Trainer[] = [];

  isManager = true;

  constructor(public dialog: MatDialog, private trainerService: TrainerControllerService) {}

  ngOnInit() {
    this.isManager = true;

    this.trainerService.getAllTrainers().subscribe(t => {
      this.trainers = t;
    });
  }

  showCalendar() {}

  goToTrainer(trainer: Trainer) {}

  grabS3Resume(trainer: Trainer) {}

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
        this.trainers.push(result);
        this.trainerService.createTrainer(result);
      }
    });
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }
}
