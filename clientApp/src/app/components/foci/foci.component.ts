import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../../model/curriculum';

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

  constructor() {}

  ngOnInit() {}

  addFocus(e) {
    e.preventDefault();
    console.log('Adding Focus');
  }

  editFocus(e) {
    console.log('Editing Focus');
  }

  removeFocus(e) {
    console.log('Removing Focus');
  }
}
