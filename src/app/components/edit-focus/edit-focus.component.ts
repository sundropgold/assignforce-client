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
  constructor(
    private dialogRef: MatDialogRef<EditFocusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curriculum,
    private skillControllerService: SkillControllerService,
    private focusControllerService: FocusControllerService
  ) {}

  //The Focus in question
  focus: Focus;

  //The array of available skills
  skills: Skill[] = [];

  //The array of selected skills
  selectedSkills: Skill[] = [];

  //Sets up the modal with all the data it will need to occomplish its task.
  ngOnInit() {
    this.newFocus();
    this.skillControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.skills = data;
        this.selectedSkills = this.data.skills;
        this.focus = JSON.parse(JSON.stringify(this.data));
      });
  }

  //Closes the Modal
  closeDialog() {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  //Compares the skills so that you can see what already exists in the object in the select
  compareFunction(skill1, skill2) {
    return skill1.name === skill2.name;
  }

  //Resets the focus object so that we don't have undefined issues when loading a page
  newFocus(): void {
    this.focus = new Focus(0, '', true, []);
  }

  //Sends the updated focus to the backend to be processed
  editFocus(): void {
    console.log('We are Editing a focus ' + this.data.name);
    this.focus.skills = this.selectedSkills;
    console.log(this.focus.skills);
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
