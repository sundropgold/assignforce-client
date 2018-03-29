import { Component, OnInit, Input } from '@angular/core';
import { Trainer } from '../../../model/trainer';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.css']
})
export class TrainerItemComponent implements OnInit {
  isManager: boolean;
  constructor() {}
  @Input() trainer: Trainer = new Trainer();
  ngOnInit() {
    this.isManager = true;
  }

  removeTrainer(trainer: Trainer) {
    trainer.active = false;
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }
}
