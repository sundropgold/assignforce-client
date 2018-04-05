import { Component, OnInit, Input } from '@angular/core';
import { Curriculum } from '../../model/Curriculum';
import { MatDialog } from '@angular/material';
import { AddFocusComponent } from '../add-focus/add-focus.component';
import { Skill } from '../../model/Skill';
import { EditFocusComponent } from '../edit-focus/edit-focus.component';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';

@Component({
  selector: 'app-foci',
  templateUrl: './foci.component.html',
  styleUrls: ['./foci.component.css']
})
export class FociComponent implements OnInit {
  focusData: Curriculum[] = [];

  constructor(private dialog: MatDialog, private curriculumControllerService: CurriculumControllerService) {}

  ngOnInit() {
    this.curriculumControllerService.retrieveAllActiveFocus().subscribe(data => {
      const tempData: Curriculum[] = data;
      for (let i = 0; i < tempData.length; i++) {
        if (tempData[i].core === false) {
          this.focusData.push(tempData[i]);
        }
      }
    });
  }

  addFocus(e) {
    console.log('Adding Focus');
  }

  editFocus(e) {
    console.log('Editing Focus');
  }

  removeFocus(e) {
    console.log('Removing Focus');
  }

  openAddFocusDialog() {
    const dialogRef = this.dialog.open(AddFocusComponent, {});
  }

  openEditFocusDialog(focus) {
    const dialogRef = this.dialog.open(EditFocusComponent, {
      data: focus
    });
  }

  confirmRemoveFocus(focus) {
    if (confirm('Are you sure you want to remove ' + focus.name + '?')) {
      this.curriculumControllerService.deleteCurriculum(focus.id);
    }
  }
}
