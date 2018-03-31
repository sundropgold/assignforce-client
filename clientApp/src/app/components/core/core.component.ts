import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../../model/Curriculum';
import { CurriculaService } from '../../services/curricula/curricula.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  coreData: Curriculum[];
  //   {
  //     currId: 1,
  //     name: '.NET',
  //     core: true,
  //     active: true,
  //     skills: [
  //       {}
  //     ]
  //     //['Core .NET', 'AngularJS', 'C#', 'ASP.NET', 'MVC', 'T-SQL']
  //   },
  //   {
  //     currId: 2,
  //     name: 'JAVA',
  //     core: true,
  //     active: true,
  //     skills: ['Core JAVA', 'Angular4', 'HTML5', 'Spring', 'MVC', 'SQL']
  //   },
  //   {
  //     currId: 3,
  //     name: 'SDET',
  //     core: true,
  //     active: true,
  //     skills: ['Core SDET', 'Python', 'UFT', 'Manual Testing']
  //   },
  //   {
  //     currId: 4,
  //     name: 'Custom',
  //     core: true,
  //     active: true,
  //     skills: ['']
  //   }
  // ];

  constructor(private curriculaService: CurriculaService) {}

  ngOnInit() {
    this.curriculaService.getCurricula().subscribe(data => {
      this.coreData = data;
      console.log(this.coreData);
    })
  }

  printAllData() {
    for(let i = 0; i < this.coreData.length; i++){

      console.log(this.coreData[i].name);
      console.log(this.coreData[i].skills)
      console.log(this.coreData[i].skills)
      
    }
  }
}
