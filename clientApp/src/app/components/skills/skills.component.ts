import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../model/skill';
import { MatDialog } from '@angular/material';
import { AddSkillComponent } from '../add-skill/add-skill.component';

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

  @Output() skills: EventEmitter<Skill[]> = new EventEmitter<Skill[]>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.skills.emit(this.skillData);
  }

  addSkill(e) {
    console.log('Adding Skill');
  }

  editSkill(e) {
    console.log('Editing Skill');
  }

  removeSkill(e) {
    console.log('Removing Skill');
  }

  deselect() {
    document.getElementById('mat-expansion-panel-header-2').blur();
  }

  openAddSkillDialog() {
    const dialogRef = this.dialog.open(AddSkillComponent, {
      width: '250px',
      height: '500px',
      data: this.skillData
    });
  }
}
