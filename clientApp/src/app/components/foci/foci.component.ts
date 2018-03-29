import { Component, OnInit, Input } from '@angular/core';
import { Curriculum } from '../../model/curriculum';
import { MatDialog } from '@angular/material';
import { AddFocusComponent } from '../add-focus/add-focus.component';
import { Skill } from '../../model/skill';
import { EditFocusComponent } from '../edit-focus/edit-focus.component';

@Component({
  selector: 'app-foci',
  templateUrl: './foci.component.html',
  styleUrls: ['./foci.component.css']
})
export class FociComponent implements OnInit {
  focusData: Curriculum[] = [
    {
      currId: 4,
      name: 'Microservices',
      core: false,
      active: true,
      skills: ['Core JAVA', 'JUnit', 'Spring', 'REST', 'MVC', 'SOAP']
    },
    {
      currId: 5,
      name: 'Pega',
      core: false,
      active: true,
      skills: ['Pega']
    },
    {
      currId: 6,
      name: 'Oracle Fusion',
      core: false,
      active: true,
      skills: ['Core JAVA', 'Oracle SQL']
    }
  ];

  // @Input() skills: Skill[];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addFocus(e) {
    console.log('Adding Focus');
  }

  editFocus(e) {
    console.log('Editing Focus');
  }

  removeFocus(e) {
    console.log('Removing Focus');
  }

  deselect() {
    document.getElementById('mat-expansion-panel-header-1').blur();
  }

  openAddFocusDialog() {
    const dialogRef = this.dialog.open(AddFocusComponent, {
      width: '250px',
      height: '500px'
      // data: this.skills
    });
  }

  openEditFocusDialog(focus) {
    const dialogRef = this.dialog.open(EditFocusComponent, {
      width: '250px',
      height: '500px',
      data: focus
    });
  }
}
