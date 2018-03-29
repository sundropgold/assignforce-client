import { Component, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillData: Skill[] = [
    { skillId: 1, name: 'Core Java', active: true },
    { skillId: 2, name: '.Net', active: true },
    { skillId: 3, name: 'Spring', active: true },
    { skillId: 4, name: 'REST', active: true },
    { skillId: 5, name: 'JUnit', active: true }
  ];

  constructor() {}

  ngOnInit() {}

  addSkill(e) {
    e.preventDefault();
    console.log('Adding Skill');
  }

  editSkill(e) {
    console.log('Editing Skill');
  }

  removeSkill(e) {
    console.log('Removing Skill');
  }
}
