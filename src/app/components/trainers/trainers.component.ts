import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
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

    this.trainerService.findAll().subscribe(t => {
      this.trainers = t;
    });
  }

  showCalendar() {}

  goToTrainer(trainer: Trainer) {}

  grabS3Resume(trainer: Trainer) {}

  addTrainer(): void {
    //add trainer

    const dialogRef = this.dialog.open(TrainersAddComponent, {
      width: '450px',
      data: {
        trainer: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainers.push(result);
        this.trainerService.create(result);
      }
    });
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }
}
