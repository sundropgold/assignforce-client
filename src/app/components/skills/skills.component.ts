import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '../../model/Skill';
import { Trainer } from '../../model/Trainer';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  // data

  lockSkills = true;
  disabled = true;
  skillsList: Skill[] = [];
  skill: Skill;
  @Input() trainer: Trainer;
  @Input() displayTrainer: Trainer;
  loading: boolean;

  constructor(
    private skillService: SkillControllerService,
    private trainerService: TrainerControllerService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAllSkills();
  }

  updateSkills() {
    this.lockSkills = !this.lockSkills;
    if (this.lockSkills) {
      console.log('MADE IT HERE');
      this.trainerService
        .update(this.trainer)
        .toPromise()
        .then(trainer => {
          this.http
            .get(`https://hydra.cfapps.io/api/trainers/3/skills`)
            .toPromise()
            .then(resp => {
              console.log(resp);
            });
          //this.trainer = trainer;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // updateSkills() {
  //   this.lockSkills = !this.lockSkills;
  //   if (this.lockSkills === true) {
  //     this.trainerService
  //       .update(this.trainer)
  //       .toPromise()
  //       .then(trainer => {
  //         console.log(trainer);
  //         this.trainer = trainer;
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }

  // called to save the current state of the trainers skills
  saveTSkills() {
    // this.trainerService.update(this.trainer).subscribe(() => {});
  }

  // add a skill to the current trainer
  addSkill(skill) {
    for (let i = 0; i < this.skillsList.length; i++) {
      if (this.skillsList[i] === skill) {
        this.trainer.skills.push(skill);
        this.skillsList.splice(i, 1);
        break;
      }
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
    this.loading = true;
    this.skillService
      .findAll()
      .toPromise()
      .then(response => {
        this.loading = false;
        this.skillsList = response;
        for (const skill of this.skillsList) {
          for (const trainerSkill of this.displayTrainer.skills) {
            if (skill.name === trainerSkill.name) {
              this.skillsList.splice(this.skillsList.indexOf(skill));
            }
          }
        }
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
}
