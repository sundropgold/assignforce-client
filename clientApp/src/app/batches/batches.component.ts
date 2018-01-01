import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource, MatCheckbox, MatPaginator} from '@angular/material';
import {Batch, BatchLocation, BatchStatus} from '../domain/batch';
import {FormControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {BatchService} from '../services/batch.service';
import {NotificationService} from '../services/notification.service';
import {CurriculaService} from '../services/curricula.service';
import {TrainerService} from '../services/trainer.service';
import {DatePipe} from '@angular/common';
import {Curriculum} from '../domain/curriculum';
import {Trainer} from '../domain/trainer';
import {SkillService} from '../services/skill.service';
import {Skill} from '../domain/skill';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {

  // FAKE VALUES FOR THE FIRST TAB
  curDate: any;
  datebetween: any;
  creating = true;
  batch: Batch;
   monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  curriculumForm: Curriculum[];

  skills = new FormControl();

  skillForm: Skill[];

  trainerForm: Trainer[];

  // locations = [
  //   {value: 'location-0', viewValue: 'Revature HQ - Reston,VA'},
  //   {value: 'location-1', viewValue: 'CUNY - SPS,NY'}
  // ];
  locations: any[] = [
    {
      'location': 'Reston HQ - Reston, VA',
      'building': [
        {
          'name': 'Douglas  Pace', 'rooms': [{'name': '101'}]
        },
        {
          'name': 'Mcleod  Mueller'
        },
      ]
    },
    {
      'location': 'CUNY - New York, NY',
      'building': [
        {
          'name': 'SPS'
        },
        {
          'name': 'QUEENS COLLEGE'
        }
      ]
    }
  ];

  buildings = [
    {value: 'building-0', viewValue: 'Reston'},
    {value: 'trainer-1', viewValue: 'CSPS'},
    {value: 'trainer-2', viewValue: 'Steven Kelsey'}];
  rooms = [
    {value: 'room-0', viewValue: '201'},
    {value: 'room-1', viewValue: '301'},
  ];


  firstTabHeader = 'Create New Batch';

  //  VALUES FOR THE ALL BATCHES TAB
  BatchData: Batch[];
  batchData = new MatTableDataSource(this.BatchData);
  batchValues = ['Checkbox', 'name', 'curriculumName', 'focusName', 'trainerName', 'location', 'building', 'room', 'startDate', 'endDate', 'Icons'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private batchService: BatchService,
              private curriculaService: CurriculaService,
              private trainerService: TrainerService,
              private skillService: SkillService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAll();
    this.initBatch();
  }

  ngAfterViewInit() {
    this.batchData.sort = this.sort;
    this.batchData.paginator = this.paginator;
    this.batchData = new MatTableDataSource(this.BatchData);
  }

  EditBatch() {
    this.firstTabHeader = 'Edit Batch';
  }

  CloneBatch() {
    this.firstTabHeader = 'Clone Batch';
  }

  DeleteBatch() {
  }

  SynchronizeBatch() {
  }

  isAuthorized() {
    return false;
    // get user priviledge and return true if admin , else return false. Result determines if batch creation is available.
  }
  isCreating() {
    return this.creating;
  }
  clickTest(evt) {
    this.creating = !this.creating;
    this.showToast('Creating new Batch');
    evt.stopPropagation();
  }
  cancel(evt) {
    this.creating = !this.creating;
    evt.stopPropagation();
  }
  create(evt) {
    // createBatch(). send form with data to micro service for batch creation.
    this.creating = !this.creating;
    console.log(this.batch);
    this.batchService.create(this.batch).subscribe(data => {});
    evt.stopPropagation();
  }
  calcDate(evt) {
    this.curDate = new Date();
    this.datebetween = ((this.batch.endDate)as any - ((this.batch.startDate)as any)) / 1000 / 60 / 60 / 24;
    this.batch.name = this.curDate.getYear() % 100 + '' + (this.batch.startDate.getMonth() + 1) + '' + this.monthNames
      [this.batch.startDate.getMonth()] + '' + (this.batch.startDate.getUTCDate()) + '' + this.batch.curriculum;
    console.log(this.batch.name);
  }
  setCur(evt) {
    this.batch.curriculum = evt;
    this.batch.curriculumName = evt.viewValue;
    console.log(this.batch);

  }
  initBatch() {
    this.batch = {
      name: '' ,
      startDate: new Date(),
      endDate: new Date(),
      curriculum: 1,
      focus: 1,
      trainer: 1,
      cotrainer: 1,
      batchStatus: null,
      batchLocation: {
        buildingId: null,
        buildingName: null,
        roomId: null,
        roomName: null,
        locationId: null,
        locationName: null
      },
      skills: [],
      id: null,
      // Data that is not in the backend
      progress: 1,
      curriculumName: '',
      focusName: '',
      trainerName: '',
      cotrainerName: ''
    };
  }

  // error messages
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  // Gets all batches and stores them in variable batchData
  // Should also get all trainers and curricula and store them
  getAll() {
    this.batchService.getAll().subscribe(data => {
      this.BatchData = data;
      for (const entry of this.BatchData) {
        this.curriculaService.getById(entry.curriculum)
          .subscribe(curriculumData => {
            entry.curriculumName = curriculumData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.curriculaService.getById(entry.focus)
          .subscribe(focusData => {
            entry.focusName = focusData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.trainerService.getById(entry.trainer)
          .subscribe(trainerData => {
            entry.trainerName = trainerData.firstName + ' ' + trainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });
        this.trainerService.getById(entry.cotrainer)
          .subscribe(cotrainerData => {
            entry.cotrainerName = cotrainerData.firstName + ' ' + cotrainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });
      }
      this.batchData = new MatTableDataSource(this.BatchData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
  }, error => {
      this.showToast('Failed to fetch Batches');
    });

    this.trainerService.getAll().subscribe(trainerData => {
      this.trainerForm = trainerData;
    }, error => {
      this.showToast('Failed to fetch Batches');
    });

    this.curriculaService.getAll().subscribe(curriculaData => {
      this.curriculumForm = curriculaData;
    }, error => {
      this.showToast('Failed to fetch Curricula');
    });

    this.skillService.getAll().subscribe(skillData => {
      this.skillForm = skillData;
    }, error => {
      this.showToast('Failed to fetch Skill');
    });
  }

}

