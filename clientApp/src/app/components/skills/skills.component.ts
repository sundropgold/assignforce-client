import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';
import { Trainer } from '../../model/Trainer';
import { TrainerService } from '../../services/trainer/trainer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // data
  skills: Skill[] = [
    { skillId: 1, name: 'Java', active: true },
    { skillId: 2, name: 'SQL', active: true },
    { skillId: 3, name: 'Angular', active: true },
    { skillId: 4, name: 'C++', active: true }
  ];

  skillsList: string[] = [];
  trainer: Trainer = {
    trainerId: 1,
    firstName: 'Joseph',
    lastName: 'Wong',
    skills: [],
    resume: null,
    certifications: [],
    unavailabilities: [],
    active: true
  };
  skill: Skill;

  constructor(private skillService: SkillService, private trainerService: TrainerService) {}

  ngOnInit() {
    this.populateSkillList();
  }

  // called to save the current state of the trainers skills
  saveTSkills() {
    this.trainerService.update(this.trainer).subscribe(() => {});
  }

  // add a skill to the current trainer
  addSkill(skill) {
    // add the skill to the trainer skill array
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i].name === skill) {
        this.trainer.skills.push(this.skills[i]);
        break;
      }
    }

    this.remove(skill);
  }

  // remove the same skill from the skill list array
  remove(skill: any): void {
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
    this.skillService.getAll().subscribe(response => {
      this.skills = response;
      let status = true;
      for (let i = 0; i < this.skills.length; i++) {
        for (let j = 0; j < this.trainer.skills.length; j++) {
          if (this.skills[j].skillId === this.skills[i].skillId) {
            status = false;
            break;
          }
        }
        if (status) {
          this.skillsList.push(this.skills[i].name);
        }
        status = true;
      }
    });
  }
  populateSkillList() {
    for (let i = 0; i < this.skills.length; i++) {
      this.skillsList.push(this.skills[i].name);
    }
  }
}
