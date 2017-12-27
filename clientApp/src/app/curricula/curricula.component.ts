import {Component, Inject, OnInit} from '@angular/core';
import {Curriculum} from '../domain/curriculum';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  clickTest(evt) {
    console.log('button clicked');
    evt.stopPropagation();
  }

  /* Create Curriculum button*/
  createCurr(evt): void {
    const dialogRef  = this.dialog.open(CurriculaCreateCurrDialogComponent,
      {
            width: '250px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-curr dialog closed');
    });
    evt.stopPropagation();
  }



}

@Component({
  selector: 'app-curricula-create-curr-dialog',
  templateUrl: 'curricula-create-curr-dialog.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaCreateCurrDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<CurriculaCreateCurrDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
