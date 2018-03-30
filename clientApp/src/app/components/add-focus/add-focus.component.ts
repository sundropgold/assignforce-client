import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-add-focus',
  templateUrl: './add-focus.component.html',
  styleUrls: ['./add-focus.component.css']
})
export class AddFocusComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddFocusComponent>) {}

  skills: Skill[] = [
    { skillId: 1, name: 'Core Java', active: true },
    { skillId: 2, name: '.Net', active: true },
    { skillId: 3, name: 'Spring', active: true },
    { skillId: 4, name: 'REST', active: true },
    { skillId: 5, name: 'JUnit', active: true }
  ];

  selectedSkills: Skill[];

  ngOnInit() {}

  closeDialog(): void {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }
}
