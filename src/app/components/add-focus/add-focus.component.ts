import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Skill } from '../../model/Skill';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { Curriculum } from '../../model/Curriculum';

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
    { skillId: 1, name: 'Core Java', active: true },
    { skillId: 2, name: '.Net', active: true },
    { skillId: 3, name: 'Spring', active: true },
    { skillId: 4, name: 'REST', active: true },
    { skillId: 5, name: 'JUnit', active: true }
  ];

  selectedSkills: Skill[];

  ngOnInit() {
    this.focus = new Curriculum(0, '', false, true, []);
  }

  closeDialog(): void {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  addFocus(): void {
    console.log('We are Adding a focus ' + this.focus.name);
    this.curriculumControllerService.createCurriculum(this.focus);
    this.focus = new Curriculum(0, '', false, true, []);
    this.closeDialog();
  }
}
