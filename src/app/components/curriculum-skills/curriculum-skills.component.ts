import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Skill } from '../../model/Skill';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { EditSkillComponent } from '../edit-skill/edit-skill.component';

@Component({
  selector: 'app-curriculum-skills',
  templateUrl: './curriculum-skills.component.html',
  styleUrls: ['./curriculum-skills.component.css']
})
export class CurriculumSkillsComponent implements OnInit {
  skillData: Skill[] = [];

  constructor(private dialog: MatDialog, private skillControllerService: SkillControllerService) {}

  ngOnInit() {
    this.skillControllerService.findAll().subscribe(data => {
      this.skillData = data;
    });
  }

  openAddSkillDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AddSkillComponent, {
      data: this.skillData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshSkills();
    });
  }

  openEditSkillDialog(skill) {
    const dialogRef = this.dialog.open(EditSkillComponent, {
      data: skill
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshSkills();
    });
  }

  refreshSkills(): void {
    this.skillControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.skillData = data;
      });
  }

  confirmRemoveFocus(skill) {
    if (confirm('Are you sure you want to remove ' + skill.name + '?')) {
      this.skillControllerService
        .remove(skill.id)
        .toPromise()
        .then(() => {
          this.refreshSkills();
        })
        .catch(err => {
          alert('Error occurred while removing skill');
          console.log(err);
        });
    }
  }
}
