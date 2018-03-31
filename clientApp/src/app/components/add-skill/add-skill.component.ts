import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/Skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddSkillComponent>) {}

  skill: Skill

  ngOnInit() {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
