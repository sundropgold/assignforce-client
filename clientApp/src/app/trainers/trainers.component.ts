import {Component, OnInit} from '@angular/core';
import {Trainer} from '../domain/trainer';
import {Skill} from "../domain/skill";

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers: Trainer[];


  constructor() {
  }

  ngOnInit() {
    const Skillz: Skill[] = [{
      skillId: 1,
      name: 'Java',
      active: true
    }];
    this.trainers = [{
      trainerId: 30,
      firstName: 'James',
      lastName: 'Smith',
      skills: Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume',
    },
      {
        trainerId: 30,
        firstName: 'Jane',
        lastName: 'Doe',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume',
      }];
  }

  addTrainer() {
  }

  showCalendar() {
  }

  goToTrainer(trainer: Trainer) {
  }

  grabS3Resume(trainer: Trainer) {
  }

  removeTrainer(trainer: Trainer) {
  }

  activateTrainer(trainer: Trainer) {
  }

}
