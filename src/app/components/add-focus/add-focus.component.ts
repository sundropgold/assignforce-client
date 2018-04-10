import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Skill } from '../../model/Skill';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';
import { Focus } from '../../model/Focus';

@Component({
  selector: 'app-add-focus',
  templateUrl: './add-focus.component.html',
  styleUrls: ['./add-focus.component.css']
})
export class AddFocusComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFocusComponent>,
    private focusControllerService: FocusControllerService,
    private skillControllerService: SkillControllerService
  ) {}

  //The focus to be added.
  focus: Focus;

  //The array of all skills possible to add to the focus.
  skills: Skill[] = [];

  //The array of all skills that have been selected for addition to the focus.
  selectedSkills: Skill[];

  //Gathers and sets all needed data for adding a focus.
  ngOnInit() {
    this.newFocus();
    this.skillControllerService.findAll().subscribe(data => {
      this.skills = data;
    });
  }

  //Closes the add Focus Modal.
  closeDialog(): void {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  //Resets the current Focus.  This is here to prevent the old focus from persisting between additions and to prevent undefined errors.
  newFocus(): void {
    this.focus = new Focus(0, '', false, []);
  }

  //Sends the Focus to the server to be added.
  addFocus(): void {
    console.log('We are Adding a focus ' + this.focus.name);
    console.log(this.focus);
    this.focus.skills = this.selectedSkills;
    this.focusControllerService
      .create(this.focus)
      .toPromise()
      .then()
      .catch(err => {
        alert('Error occurred while adding Focus');
        console.log(err);
      });
    this.newFocus();
    this.closeDialog();
  }
}
