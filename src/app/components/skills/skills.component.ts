import { Component, OnInit } from '@angular/core';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // data
  skills: Skill[] = [];

  lockSkills = true;
  disabled = true;
  skillsList: string[] = [];
  trainer: Trainer;
  skill: Skill;

  constructor(private skillService: SkillControllerService) {}

  ngOnInit() {
    this.getAllSkills();
    this.populateSkillList();
  }

  updateSkills() {
    this.lockSkills = !this.lockSkills;
  }

  // called to save the current state of the trainers skills
  saveTSkills() {
    // this.trainerService.update(this.trainer).subscribe(() => {});
  }

  // add a skill to the current trainer
  addSkill(skill) {
    // add the skill to the trainer skill array
    this.trainer.skills.push(this.skills.filter(s => s.name === skill)[0]);
    this.remove(skill);
  }

  // remove the same skill from the skill list array
  remove(skill: string): void {
    const index = this.skillsList.indexOf(skill);
    if (index >= 0) {
      this.skillsList.splice(index, 1);
    }
  }

  // remove a trainer skill on the bottom
  removeSkill(skill) {
    for (let i = 0; i < this.trainer.skills.length; i++) {
      if (this.trainer.skills[i] === skill) {
        this.skillsList.push(skill.name);
        this.trainer.skills.splice(i, 1);
        break;
      }
    }
  }

  // grab all the skills and create a skill list
  getAllSkills() {
    this.skillService.findAll().subscribe(response => {
      this.skills = response;
      // let status = true;
      // for (let i = 0; i < this.skills.length; i++) {
      //   for (let j = 0; j < this.trainer.skills.length; j++) {
      //     if (this.skills[j].id === this.skills[i].id) {
      //       status = false;
      //       break;
      //     }
      //   }
      //   if (status) {
      //     this.skillsList.push(this.skills[i].name);
      //   }
      //   status = true;
      // }
    });
  }
  populateSkillList() {
    this.skillsList = this.skills.map(skill => skill.name);
  }
}
