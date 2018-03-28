import { Component, OnInit } from '@angular/core';

import { Curriculum } from '../../model/curriculum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-curricula',
  templateUrl: './curricula.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaComponent implements OnInit {
  isAdmin: Boolean = true;
  currData: Curriculum[] = [
    {
      currId: 9,
      name: 'C++',
      core: true,
      active: false,
      skills: ['Core C++']
    }
  ];
  constructor() {}

  ngOnInit() {}

  clickTest(evt) {
    console.log('button clicked');
    evt.stopPropagation();
  }
}
