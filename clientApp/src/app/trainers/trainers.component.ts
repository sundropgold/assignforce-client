import {Component, OnInit} from '@angular/core';
import {Trainer} from '../domain/trainer';

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
