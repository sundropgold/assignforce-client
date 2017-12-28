import {Component, Inject, OnInit} from '@angular/core';
import {Curriculum} from '../domain/curriculum';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {S3CredentialService} from '../services/s3-credential.service';
import {CurriculaService} from '../services/curricula.service';
import {NotificationService} from '../services/notification.service';


@Component({
  selector: 'app-curricula',
  templateUrl: './curricula.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaComponent implements OnInit {

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

  /* variables */
  isAdmin: Boolean = true;
  curricula: Curriculum[];

  /* constructor */
  constructor(public dialog: MatDialog,
              private router: Router,
              private s3Service: S3CredentialService,
              private curriculaService: CurriculaService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    /* grab curricula from server */
    this.getAll();
  }

  /* Functions to services*/
  getAll() {
    this.curriculaService.getAll()
      .subscribe(data => {
          this.curricula = data;
          console.log(this.curricula);
        }, error => {
          this.showToast('Failed to fetch Curricula');
        }
      );
  }



  /* Functions to click events */

  clickTest(evt) {
    console.log('button clicked');
    evt.stopPropagation();
  }

  /* toast message */
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  /* Create Curriculum button*/
  createCore(evt): void {
    const dialogRef  = this.dialog.open(CurriculaCurriculumDialogComponent,
      {
            width: '250px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-core dialog closed');
    });
    evt.stopPropagation();
  }

  createFocus(evt): void {
    const dialogRef  = this.dialog.open(CurriculaCurriculumDialogComponent,
      {
        width: '250px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-focus dialog closed');
    });
    evt.stopPropagation();
  }

  editCurr(evt, curriculum): void {
    const dialogRef  = this.dialog.open(CurriculaCurriculumDialogComponent,
      {
        width: '250px',
        data: curriculum
      });
    dialogRef.componentInstance.

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-focus dialog closed');
    });
    evt.stopPropagation();
  }

  removeCurr(evt): void {
    const dialogRef  = this.dialog.open(CurriculaRemovalDialogComponent,
      {
        width: '400px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-focus dialog closed');
    });
    evt.stopPropagation();
  }

  createSkill(evt): void {
    const dialogRef  = this.dialog.open(CurriculaCreateSkillDialogComponent,
      {
        width: '250px'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('create-skill dialog closed');
    });
    evt.stopPropagation();
  }

}

@Component({
  selector: 'app-curricula-curriculum-dialog',
  templateUrl: 'curricula-curriculum-dialog.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaCurriculumDialogComponent {

  /* variables */
  curriculum: Curriculum = {
    currId: null,
    name: '',
    core: null,
    active: null,
    skills: null
  };
  skills = new FormControl();
  skillList = [
    'AngularJS',
    'Angular4',
    'ASP.NET MVC',
    'ASP.NET WEB API',
    'C',
    'C#',
    'C++',
    'Core.NET',
    'Core Java',
    'Core SDET',
    'CSS',
    'HTML',
    'SQL',
    'Spring'
  ];

  constructor(
    public dialogRef: MatDialogRef<CurriculaCurriculumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    if (this.data) {
      console.log(this.data);
      this.curriculum = this.data;
    }
  }


  onNoClick(): void {
      this.dialogRef.close();
    }
}

@Component({
  selector: 'app-curricula-create-skill-dialog',
  templateUrl: 'curricula-create-skill-dialog.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaCreateSkillDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CurriculaCreateSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-curricula-removal-dialog',
  templateUrl: 'curricula-removal-dialog.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaRemovalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CurriculaRemovalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
