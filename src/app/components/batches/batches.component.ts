import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';

import { BatchLocation } from '../../model/BatchLocation';
import { Curriculum } from '../../model/Curriculum';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { LocationControllerService } from '../../services/api/location-controller/location-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit, DoCheck {
  //--------------------------------------------------Temporary---------------------------------------------------
  skillsList = [];

  focuses = [];

  trainers = [];

  curriculums: Curriculum[] = [];
  locations: BatchLocation[] = [];
  buildings = [];
  rooms = [];
  selectedLocation = null;
  selectedBuilding = null;
  selectedCurriculum = null;

  //--------------------------------------------------VALUES FOR CREATE BATCHES----------------------------------------
  batchForm: FormGroup;

  // //Object for storing batch form data
  // batchObj: Batch;

  // //Look up data for the form fields
  // curriculums: Curriculum;
  // locations: Location;

  //number of weeks between two of the selected dates
  numOfWeeksBetween = 0;
  //generated batch name based on the selected Curriculum/Focus and start date
  genBatchName = '';

  firstTabHeader = 'Create New Batch';

  //  VALUES FOR THE ALL BATCHES TAB
  batchValues = [
    'Checkbox',
    'Name',
    'Curriculum',
    'Focus',
    'Trainer/Co-Trainer',
    'Location',
    'Building',
    'Room',
    'StartDate',
    'EndDate',
    'Icons'
  ];
  batchData = new MatTableDataSource([]);
  // batchData = new MatTableDataSource(BatchData);

  //default for current date
  currentDate: Date = new Date();

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'thumbs-up',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg')
  //   );
  // }
  constructor(
    private fb: FormBuilder,
    private curriculumService: CurriculumControllerService,
    private locationService: LocationControllerService,
    private skillService: SkillControllerService,
    private trainerService: TrainerControllerService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.curriculumService
      .retrieveAllActiveCore()
      .toPromise()
      .then(response => {
        this.curriculums = response;
      });
    this.locationService
      .retrieveAllLocation()
      .toPromise()
      .then(response => {
        this.locations = response;
      });
    this.skillService
      .findAll()
      .toPromise()
      .then(response => {
        this.skillsList = response;
      });
    this.curriculumService
      .retrieveAllActiveFocus()
      .toPromise()
      .then(response => {
        this.focuses = response;
      });
    this.trainerService
      .getAllTrainers()
      .toPromise()
      .then(response => {
        this.trainers = response;
        console.log(this.trainers);
      });
    this.batchForm = this.fb.group({
      curriculum: [null, Validators.required],
      focus: [null],
      skills: [[], Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      batchName: [null],
      trainer: [null, Validators.required],
      cotrainer: [null, Validators.required],
      location: [null, Validators.required],
      building: [null, Validators.required],
      room: [null, Validators.required]
    });

    this.batchForm.valueChanges.subscribe(data => {
      const startDate = data.startDate;
      const endDate = data.endDate;
      const curriculum = data.curriculum;
      this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, endDate);
      this.genBatchName = this.createBatchName(curriculum, startDate);
    });
  }

  ngDoCheck() {
    if (this.batchForm.value.location) {
      const locationName = this.batchForm.value.location.name;
      if (locationName && locationName !== this.selectedLocation) {
        this.selectedLocation = locationName;
        this.buildings = this.batchForm.value.location.buildings;
      }
    }
    if (this.batchForm.value.building) {
      const buildingName = this.batchForm.value.building.name;
      if (buildingName && buildingName !== this.selectedBuilding) {
        this.selectedBuilding = buildingName;
        this.rooms = this.batchForm.value.building.rooms;
      }
    }
    if (this.batchForm.value.curriculum) {
      this.selectedCurriculum = this.batchForm.value.curriculum;
    }
    if (this.batchForm.value.trainer) {
    }
  }

  ngAfterViewInit() {
    // this.batchData.sort = this.sort;
  }

  //initialize form group
  createBatch() {
    this.firstTabHeader = 'Create New Batch';
  }

  editBatch() {
    // this.firstTabHeader = 'Edit Batch';
  }

  cloneBatch() {
    // this.firstTabHeader = 'Clone Batch';
  }

  deleteBatch() {}

  //Insert a new batch using provided form data
  onSubmit(form: NgForm) {
    //for testing
    console.log(form);
  }

  //Calculate number of weeks between two dates
  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    if (startDate && endDate) {
      const numberOfDays = Math.abs(<any>startDate - <any>endDate) / (1000 * 60 * 60 * 24);
      const numberOfWeeks = Math.floor(numberOfDays / 7);
      // const numberOfWeeks = numberOfDays/7;

      return numberOfWeeks;
    }
    return 0;
  }

  //Generate Batch Name
  createBatchName(curriculum: string, startDate: number): string {
    if (curriculum && startDate) {
      const date = new Date(startDate);

      const year = date
        .getFullYear()
        .toString()
        .substr(-2);
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();
      const monthName = date.toLocaleString('en-us', { month: 'short' });

      if (date.getDate() < 10) {
        day = '0' + day;
      }

      if (date.getMonth() < 10) {
        month = '0' + month;
      }

      return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum;
    }

    return '';
  }

  // SynchronizeBatch() {}
}
