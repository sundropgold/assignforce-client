import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Skill } from '../../model/Skill';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { Curriculum } from '../../model/Curriculum';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

@Component({
  selector: 'app-add-focus',
  templateUrl: './add-focus.component.html',
  styleUrls: ['./add-focus.component.css']
})
export class AddFocusComponent implements OnInit {
  focus: Curriculum;

  constructor(
    public dialogRef: MatDialogRef<AddFocusComponent>,
    private curriculumControllerService: CurriculumControllerService,
    private skillControllerService: SkillControllerService
  ) {}

  skills: Skill[] = [];

  selectedSkills: Skill[];

  ngOnInit() {
    this.newFocus();
    this.skillControllerService.findAllActive().subscribe(data => {
      this.skills = data;
    });
  }

  closeDialog(): void {
    console.log(this.selectedSkills);
    this.dialogRef.close();
  }

  newFocus(): void {
    this.focus = new Curriculum(0, '', false, true, []);
  }

  addFocus(): void {
    console.log('We are Adding a focus ' + this.focus.name);
    this.curriculumControllerService.createCurriculum(this.focus);
    this.newFocus();
    this.closeDialog();
  }
}
