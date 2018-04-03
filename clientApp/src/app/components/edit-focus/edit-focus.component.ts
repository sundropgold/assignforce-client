import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../model/Skill';
import { Curriculum } from '../../model/Curriculum';
import { FormControl, FormGroup } from '@angular/forms';
import { SkillService } from '../../services/skill/skill.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

@Component({
  selector: 'app-edit-focus',
  templateUrl: './edit-focus.component.html',
  styleUrls: ['./edit-focus.component.css']
})
export class EditFocusComponent implements OnInit {
  focus: Curriculum;

  constructor(
    private dialogRef: MatDialogRef<EditFocusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curriculum,
    private skillControllerService: SkillControllerService,
    private curriculaControllerService: CurriculumControllerService
  ) {}

  skills: Skill[] = [
    // { skillId: 1, name: 'Core JAVA', active: true },
    // { skillId: 2, name: '.Net', active: true },
    // { skillId: 3, name: 'Spring', active: true },
    // { skillId: 4, name: 'REST', active: true },
    // { skillId: 5, name: 'JUnit', active: true },
    // { skillId: 6, name: 'MVC', active: true },
    // { skillId: 7, name: 'SOAP', active: true },
    // { skillId: 8, name: 'Pega', active: true }
  ];

  selectedSkills: Skill[] = [];

  ngOnInit() {
    this.skillControllerService.findAll().subscribe(data => {
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

  editFocus(): void {
    console.log('We are Editing a focus ' + this.data.name);
    this.focus.skills = this.selectedSkills;
    this.curriculaControllerService.updateCurriculum(this.focus);
    this.focus = new Curriculum(0, '', false, true, []);
    this.closeDialog();
  }
}
