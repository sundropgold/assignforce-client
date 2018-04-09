import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Curriculum } from '../../model/Curriculum';
import { Skill } from '../../model/Skill';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { Focus } from '../../model/Focus';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';

@Component({
  selector: 'app-edit-focus',
  templateUrl: './edit-focus.component.html',
  styleUrls: ['./edit-focus.component.css']
})
export class EditFocusComponent implements OnInit {
  focus: Focus;

  constructor(
    private dialogRef: MatDialogRef<EditFocusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curriculum,
    private skillControllerService: SkillControllerService,
    private focusControllerService: FocusControllerService
  ) {}

  skills: Skill[] = [];

  selectedSkills: Skill[] = [];

  ngOnInit() {
    this.newFocus();
    this.skillControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.skills = data;
        this.selectedSkills = this.data.skills;
        this.focus = this.data;
      });
  }

  closeDialog() {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  compareFunction(skill1, skill2) {
    return skill1.name === skill2.name;
  }

  newFocus(): void {
    this.focus = new Focus(0, '', true, []);
  }

  editFocus(): void {
    console.log('We are Editing a focus ' + this.data.name);
    this.focus.skills = this.selectedSkills;
    this.focusControllerService
      .update(this.focus)
      .toPromise()
      .then()
      .catch(err => {
        alert('Error occurred while editing Focus');
        console.log(err);
      });
    this.newFocus();
    this.closeDialog();
  }
}
