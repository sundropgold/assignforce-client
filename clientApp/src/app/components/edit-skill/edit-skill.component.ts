import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EditSkillComponent>, @Inject(MAT_DIALOG_DATA) public data: Skill) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
