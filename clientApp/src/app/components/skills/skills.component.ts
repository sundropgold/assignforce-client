import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Skill } from '../../model/Skill';
import { MatDialog } from '@angular/material';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { EditSkillComponent } from '../edit-skill/edit-skill.component';
import { SkillService } from '../../services/skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillData: Skill[] = [];

  constructor(private dialog: MatDialog, private skillService: SkillService) {}

  ngOnInit() {
    this.skillService.getAll().subscribe(data => {
      this.skillData = data;
    });
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

  openAddSkillDialog() {
    const dialogRef = this.dialog.open(AddSkillComponent, {
      // width: '250px',
      // height: '500px',
      data: this.skillData
    });
  }

  openEditSkillDialog(skill) {
    const dialogRef = this.dialog.open(EditSkillComponent, {
      data: skill
    });
  }

  confirmRemoveFocus(skill) {
    if (confirm('Are you sure you want to remove ' + skill.name + '?')) {
      console.log('Hi');
    }
  }
}
