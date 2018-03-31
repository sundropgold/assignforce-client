import { Component, OnInit, Input } from '@angular/core';
import { Curriculum } from '../../model/Curriculum';
import { MatDialog } from '@angular/material';
import { AddFocusComponent } from '../add-focus/add-focus.component';
import { Skill } from '../../model/Skill';
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
      skills: [
        {skillId: 1, name: 'Core JAVA', active: true},
        {skillId: 2, name: 'JUnit', active: true},
        {skillId: 3, name: 'Spring', active: true},
        {skillId: 4, name: 'REST', active: true},
        {skillId: 5, name: 'MVC', active: true},
        {skillId: 6, name: 'SOAP', active: true}
      ]
    },
    {
      currId: 2,
      name: 'Pega',
      core: false,
      active: true,
      skills: [{skillId: 7, name: 'Pega', active: true}]
    },
    {
      currId: 3,
      name: 'Oracle Fusion',
      core: false,
      active: true,
      skills: [
        {skillId: 1, name: 'Core JAVA', active: true},
        {skillId: 8, name: 'Oracle SQL', active: true}
      ]
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

  openAddFocusDialog() {
    const dialogRef = this.dialog.open(AddFocusComponent, {
      // width: '250px',
      // height: '500px'
      // data: this.skills
    });
  }

  openEditFocusDialog(focus) {
    const dialogRef = this.dialog.open(EditFocusComponent, {
      // width: '250px',
      // height: '500px',
      data: focus
    });
  }

  confirmRemoveFocus(focus) {
    if (confirm('Are you sure you want to remove ' + focus.name + '?')) {
      console.log('Hi');
    }
  }
}
