import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../../model/curriculum';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  coreData: Curriculum[] = [
    {
      currId: 1,
      name: '.NET',
      core: true,
      active: true,
      skills: ['Core .NET', 'AngularJS', 'C#', 'ASP.NET', 'MVC', 'T-SQL']
    },
    {
      currId: 2,
      name: 'JAVA',
      core: true,
      active: true,
      skills: ['Core JAVA', 'Angular4', 'HTML5', 'Spring', 'MVC', 'SQL']
    },
    {
      currId: 3,
      name: 'SDET',
      core: true,
      active: true,
      skills: ['Core SDET', 'Python', 'UFT', 'Manual Testing']
    },
    {
      currId: 4,
      name: 'Custom',
      core: true,
      active: true,
      skills: ['']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
