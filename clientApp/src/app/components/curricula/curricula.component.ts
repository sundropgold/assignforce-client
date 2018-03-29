import { Component, OnInit } from '@angular/core';

import { Curriculum } from '../../model/curriculum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-curricula',
  templateUrl: './curricula.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaComponent implements OnInit {
  isAdmin: Boolean = true;
  skills: Skill[];

  constructor() {}

  ngOnInit() {}

  clickTest(evt) {
    console.log('button clicked');
    evt.stopPropagation();
  }

  setSkills(e): void {
    this.skills = e;
  }
}
