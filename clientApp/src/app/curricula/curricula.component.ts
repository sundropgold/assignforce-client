import {Component, Inject, OnInit} from '@angular/core';
import {Curriculum} from '../domain/curriculum';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {S3CredentialService} from '../services/s3-credential.service';
import {CurriculaService} from '../services/curricula.service';
import {NotificationService} from '../services/notification.service';
import {Skill} from '../domain/skill';
import {SkillService} from '../services/skill.service';


@Component({
  selector: 'app-curricula',
  templateUrl: './curricula.component.html',
  styleUrls: ['./curricula.component.css']
})
export class CurriculaComponent implements OnInit {

  currData: Curriculum[] = [
    {currId: 1, name: '.NET', core: true, active: true,
      skills: ['Core .NET', 'AngularJS', 'C#', 'ASP.NET', 'MVC', 'T-SQL'],
    skillObjects: null},
    {currId: 2, name: 'JAVA', core: true, active: true,
      skills: ['Core JAVA', 'Angular4', 'HTML5', 'Spring', 'MVC', 'SQL'],
      skillObjects: null},
    {currId: 3, name: 'SDET', core: true, active: true,
      skills: ['Core SDET', 'Python', 'UFT', 'Manual Testing'],
      skillObjects: null},
    {currId: 4, name: 'IntelliJ', core: true, active: true,
      skills: ['JAVA'],
      skillObjects: null},
    {currId: 5, name: 'Salesforce', core: true, active: true,
      skills: [], skillObjects: null},
    {currId: 6, name: 'Microservices', core: false, active: true,
      skills: ['Core JAVA', 'JUnit', 'Spring', 'REST', 'MVC', 'SOAP'],
      skillObjects: null},
    {currId: 7, name: 'Pega', core: false, active: true,
      skills: ['Pega'],
      skillObjects: null},
    {currId: 8, name: 'Oracle Fusion', core: false, active: true,
      skills: ['Core JAVA', 'Oracle SQL'],
      skillObjects: null},
    {currId: 9, name: 'C++', core: true, active: false,
      skills: ['Core C++'], skillObjects: null}
  ];

  /* variables */
  isAdmin: Boolean = true;
  curricula: Curriculum[];
  skills: Skill[];

  /* constructor */
  constructor(public dialog: MatDialog,
              private router: Router,
              private s3Service: S3CredentialService,
              private curriculaService: CurriculaService,
              private skillService: SkillService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    /* grab curricula from server */
    this.getAllSkills();
    this.getAllCurricula();

  }

  /* Functions to services*/
  getAllCurricula() {
    this.curriculaService.getAll()
      .subscribe(data => {
          this.curricula = data;
          for (const curr of this.curricula){
            if (curr.skills.length !== 0) {
              this.skillService.getSkillsByIds(curr.skills)
                .subscribe(skillData => {
                  curr.skillObjects = skillData;
                  // console.log(skillData);
                }, error => {
                  console.log('Failed fetching id = ', curr.currId);
                });
            }
          }
          console.log(this.curricula);
        }, error => {
          this.showToast('Failed to fetch Curricula');
        }
      );
  }

  getAllSkills() {
    this.skillService.getAll()
      .subscribe(data => {
        this.skills = data;
        console.log(this.skills);
      }, error => {
        this.showToast('Failed to fetch Skills');
        }
      );
  }

  getSkillsByIds(ids) {
    this.skillService.getSkillsByIds(ids)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log('Failed to fetch Skills through IDs');
      });
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
    skills: null,
    skillObjects: null
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
