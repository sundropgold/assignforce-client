import { Component, OnInit } from '@angular/core';

import { Curriculum } from '../../model/Curriculum';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  constructor(private curriculumControllerService: CurriculumControllerService) {}

  //An array of all Core Curricula currently in the backend.
  coreData: Curriculum[] = [];

  //Gathers all core Curricula from the backend and assigns it to coreData for displaying in a list.
  ngOnInit() {
    this.curriculumControllerService.findAll().subscribe(data => {
      this.coreData = data;
    });
  }
}
