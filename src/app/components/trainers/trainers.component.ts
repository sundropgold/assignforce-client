import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { TrainersAddComponent } from './trainers-add/trainers-add.component';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { Router } from '@angular/router';

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

  constructor(public dialog: MatDialog, private trainerService: TrainerControllerService, private router: Router) {}

  ngOnInit() {
    this.isManager = true;

    this.trainerService
      .getAllTrainers()
      .toPromise()
      .then(t => {
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
        //  this.addTrainer(result);
        this.trainers.push(result);
      }
    });
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }

  gotoTrainer(id: number) {
    console.log(`/profile/${id}`);
    this.router.navigate([`/profile/${id}`]);
  }
}
