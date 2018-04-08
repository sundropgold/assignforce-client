import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Curriculum } from '../../model/Curriculum';
import { Skill } from '../../model/Skill';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';

@Component({
  selector: 'app-add-focus',
  templateUrl: './add-focus.component.html',
  styleUrls: ['./add-focus.component.css']
})
export class AddFocusComponent implements OnInit {
  focus: Curriculum;

  constructor(
    public dialogRef: MatDialogRef<AddFocusComponent>,
    private curriculumControllerService: CurriculumControllerService
  ) {}

  skills: Skill[] = [
    { id: 1, name: 'Core Java', active: true },
    { id: 2, name: '.Net', active: true },
    { id: 3, name: 'Spring', active: true },
    { id: 4, name: 'REST', active: true },
    { id: 5, name: 'JUnit', active: true }
  ];

  selectedSkills: Skill[];

  ngOnInit() {
    this.focus = new Curriculum(0, '', false, [], []);
  }

  closeDialog(): void {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  addFocus(): void {
    console.log('We are Adding a focus ' + this.focus.name);
    this.curriculumControllerService.create(this.focus);
    this.focus = new Curriculum(0, '', false, [], []);
    this.closeDialog();
  }
}
