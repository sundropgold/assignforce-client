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
  isManager: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isManager = false;
    const Skillz: Skill[] = [{
      skillId: 1,
      name: 'Java',
      active: true
    }];
    this.trainers = [{
      trainerId: 1,
      firstName: 'James',
      lastName: 'Smith',
      skills: Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume',
    },
      {
        trainerId: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume',
      },
      {
        trainerId: 3,
        firstName: 'Jon',
        lastName: 'Jones',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume',
      },
      {
        trainerId: 4,
        firstName: 'Daniel',
        lastName: 'Cormier',
        skills: Skillz,
        certifications: 'Certs',
        active: true,
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
    trainer.active = false;
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }

}
