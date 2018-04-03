import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddSkillComponent>, private skillService: SkillService) {}

  skill: Skill;

  ngOnInit() {
    this.skill = new Skill(0, '', true);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addSkill(): void {
    console.log('We are Adding a skill ' + this.skill.name);
    this.skillService.create(this.skill);
    this.skill = new Skill(0, '', true);
  }
}
