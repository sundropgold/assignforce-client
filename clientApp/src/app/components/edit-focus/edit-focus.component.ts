import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/skill';
import { Curriculum } from '../../model/curriculum';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-focus',
  templateUrl: './edit-focus.component.html',
  styleUrls: ['./edit-focus.component.css']
})
export class EditFocusComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EditFocusComponent>, @Inject(MAT_DIALOG_DATA) public data: Curriculum) {}

  skills: Skill[] = [
    { skillId: 1, name: 'Core JAVA', active: true },
    { skillId: 2, name: '.Net', active: true },
    { skillId: 3, name: 'Spring', active: true },
    { skillId: 4, name: 'REST', active: true },
    { skillId: 5, name: 'JUnit', active: true },
    { skillId: 6, name: 'MVC', active: true },
    { skillId: 7, name: 'SOAP', active: true },
    { skillId: 8, name: 'Pega', active: true }
  ];

  selectedSkills: Skill[] = [];

  ngOnInit() {
    for (let i = 0; i < this.data.skills.length; i++) {
      let skillId;
      for (let j = 0; j < this.skills.length; j++) {
        if (this.skills[j].name === this.data.skills[i]) {
          skillId = this.skills[j].skillId;
          console.log('Inside the loop, skillId is ' + skillId);
        }
      }
      this.selectedSkills[i] = { skillId: skillId, name: this.data.skills[i], active: true };
    }
    console.log(this.selectedSkills);
  }

  closeDialog() {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  compareFunction(skill1, skill2) {
    return skill1.name === skill2.name;
  }
}
