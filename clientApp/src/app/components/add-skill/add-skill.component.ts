import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/Skill';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddSkillComponent>,
    private skillControllerService: SkillControllerService
  ) {}

  skill: Skill;

  ngOnInit() {
    this.newSkill();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  newSkill(): void {
    this.skill = new Skill(0, '', true);
  }

  addSkill(): void {
    console.log('We are Adding a skill ' + this.skill.name);
    this.skillControllerService.saveSkill(this.skill);
    this.newSkill();
    this.closeDialog();
  }
}
