import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Trainer } from '../../../model/Trainer';
import { Skill } from '../../../model/Skill';

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.css']
})
export class TrainerItemComponent implements OnInit, DoCheck {
  @Input() trainer: Trainer = new Trainer(0, '', '', [], [], null, '', []);
  isManager: boolean;
  check = false;
  skillsList = '';

  constructor() {}

  ngOnInit() {
    this.isManager = true;
  }

  ngDoCheck() {
    if (this.trainer.skills && !this.check) {
      this.listSkills(this.trainer.skills);
      this.check = true;
    }
  }

  removeTrainer(trainer: Trainer) {
    trainer.active = false;
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
  }

  listSkills(skills: Skill[]) {
    this.skillsList = '';
    const skillsArray = [];

    for (let i = 0; i < skills.length; i++) {
      skillsArray.push(skills[i].name);
    }

    this.skillsList = skillsArray.join(', ');

    if (this.skillsList === '' || skills.length === 0) {
      this.skillsList = 'None';
    }

    console.log(this.skillsList);
  }
}
