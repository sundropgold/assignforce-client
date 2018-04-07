import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Trainer } from '../../../model/Trainer';
import { Skill } from '../../../model/Skill';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
  goToprofile(id: number) {
    console.log('check go to profile');
    this.router.navigateByUrl(`profile/${id}`);
  }
  listSkills(skills: Skill[]) {
    this.skillsList = '';
    for (let i = 0; i < skills.length; i++) {
      if (i === skills.length - 1) {
        this.skillsList += skills[i].name += ' ';
      } else {
        this.skillsList += skills[i].name += ', ';
      }
    }

    if (this.skillsList === '' || skills.length === 0) {
      this.skillsList = 'None';
    }

    console.log(this.skillsList);
  }
}
