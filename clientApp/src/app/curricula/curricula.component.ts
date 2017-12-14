import { Component, OnInit } from '@angular/core';
import {Curriculum} from '../domain/curriculum';

@Component({
  selector: 'app-curricula',
  templateUrl: './curricula.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaComponent implements OnInit {

  isAdmin: Boolean = true;
  currData: Curriculum[] = [
    {currId: 1, name: '.NET', core: true, active: true,
      skills: ['Core .NET', 'AngularJS', 'C#', 'ASP.NET', 'MVC', 'T-SQL']},
    {currId: 2, name: 'JAVA', core: true, active: true,
      skills: ['Core JAVA', 'Angular4', 'HTML5', 'Spring', 'MVC', 'SQL']},
    {currId: 3, name: 'SDET', core: true, active: true,
      skills: ['Core SDET', 'Python', 'UFT', 'Manual Testing']},
    {currId: 4, name: 'IntelliJ', core: true, active: true,
      skills: ['JAVA']},
    {currId: 5, name: 'Salesforce', core: true, active: true,
      skills: []},
    {currId: 6, name: 'Microservices', core: false, active: true,
      skills: ['Core JAVA', 'JUnit', 'Spring', 'REST', 'MVC', 'SOAP']},
    {currId: 7, name: 'Pega', core: false, active: true,
      skills: ['Pega']},
    {currId: 8, name: 'Oracle Fusion', core: false, active: true,
      skills: ['Core JAVA', 'Oracle SQL']},
    {currId: 9, name: 'C++', core: true, active: false,
      skills: ['Core C++']}
  ];
  constructor() { }

  ngOnInit() {
  }


  clickTest(evt) {
    console.log('button clicked');
    evt.stopPropagation();
  }



}
