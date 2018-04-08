import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation, DoCheck } from '@angular/core';
import { MatSort, MatTableDataSource, MatCheckbox, MatSelect } from '@angular/material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Batch } from '../../model/Batch';
import { Curriculum } from '../../model/Curriculum';
import { Address } from '../../model/Address';

import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { Skill } from '../../model/Skill';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit, DoCheck {
  //--------------------------------------------------VALUES FOR CREATE BATCHES-------------------------------------
  //Object for storing batch form data
  batchForm: FormGroup;
  newBatch: Batch;
  skillsList: Skill[] = [];
  focuses = [];
  trainers = [];
  buildings = [];
  rooms = [];
  selectedLocation = null;
  selectedBuilding = null;
  selectedCurriculum = null;

  //For form select in Create New Batch
  curriculums: Curriculum[] = [];
  locations: Address[] = [];

  // Create Batch Form Data
  numOfWeeksBetween = 0;
  genBatchName = '';
  genEndDate;

  currentDate = new Date(Date.now());
  // ------------------------------------------------ VARIABLES FOR ALL BATCHES -----------------------------------
  //  COLUMNS FOR THE ALL BATCHES TAB
  batchColumns = [
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

  allBatches: Batch[];
  dataSource = new MatTableDataSource(this.allBatches);

  constructor(
    private fb: FormBuilder,
    private curriculumService: CurriculumControllerService,
    private addressService: AddressControllerService,
    private skillService: SkillControllerService,
    private trainerService: TrainerControllerService,
    private batchService: BatchControllerService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // ------------- Populating Data from Services -----------------
    this.curriculumService
      .findAll()
      .toPromise()
      .then(response => {
        this.curriculums = response;
      });
    this.addressService
      .findAll()
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
      .findAll()
      .toPromise()
      .then(response => {
        this.focuses = response;
      });
    this.trainerService
      .findAll()
      .toPromise()
      .then(response => {
        this.trainers = response;
      });
    this.batchService
      .findAll()
      .toPromise()
      .then(response => {
        this.allBatches = response;
      });

    // --------- Create Batch Validation --------------
    this.batchForm = this.fb.group({
      curriculum: [null, Validators.required],
      focus: [null],
      skills: [[], Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      batchName: [null],
      trainer: [null, Validators.required],
      cotrainer: [null],
      location: [null, Validators.required],
      building: [null],
      room: [null]
    });

    // ----- Observable for form changes in Create Batches ------
    this.batchForm.valueChanges.subscribe(data => {
      const startDate = data.startDate;
      const endDate = data.endDate;
      const curriculum = data.curriculum;
      const focus = data.focus;
      this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, endDate);
      this.genBatchName = this.createBatchName(curriculum, focus, startDate);
      if (startDate) {
        this.genEndDate = this.computeDefaultEndDate(startDate);
      }
    });
  }

  ngDoCheck() {
    // ------- Checking if form field has selected value on Create Batch form -------
    // ------- Populating Subsequent fields based on selection ---------
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
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //Insert a new batch using provided form data
  onSubmit(form: NgForm) {
    //for testing
    console.log(form);
  }

  //Calculate number of weeks between two dates
  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    const startValue = new Date(startDate).valueOf();
    const endValue = new Date(endDate).valueOf();
    if (startValue && endValue) {
      const numberOfDays = Math.abs(<any>startValue - <any>endValue) / (1000 * 60 * 60 * 24);
      const numberOfWeeks = Math.floor(numberOfDays / 7);
      return numberOfWeeks;
    }
    return 0;
  }

  //Calculate the Date of Ten weeks later from start date
  computeDefaultEndDate(startDate: number): number {
    const dateValue = new Date(startDate);
    if (dateValue) {
      const tenWeeks = 1000 * 60 * 60 * 24 * 7 * 10 + 1000 * 60 * 60 * 24;
      return dateValue.valueOf() + tenWeeks;
    }
  }

  //Generate Batch Name based on curriculum and/or focus and start date
  createBatchName(curriculum: string, focus: string, startDate: number): string {
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
      if (focus) {
        return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum + ' ' + focus;
      }
      return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum;
    }
    return '';
  }
}
