import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Angular2Csv} from 'angular2-csv';
import {BatchService} from '../services/batch.service';
import {CurriculaService} from '../services/curricula.service';
import {NotificationService} from '../services/notification.service';
import {Curriculum} from '../domain/curriculum';
import {Batch} from '../domain/batch';
import {Trainer} from '../domain/trainer';
import {TrainerService} from '../services/trainer.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  curricula: Curriculum[] = [];
  batch: Batch[] = [];
  trainer: Trainer[] = [];
  newBatch: any = {};
  // for creating new projection
  cardArr = [];
  // use for getting the current date, and calculation of the hire date
  monthList = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  year = new Date().getFullYear();
  hireDate = new Date();
  startDate = new Date();
  // Use to calculate the total number in the card array
  totalNetBatch = 0;
  totalSDETBatch = 0;
  totalJavaBatch = 0;
  totalSalesforceBatch = 0;
  totalBigDataBatch = 0;
  totalCumulativeBatch = 0;
  // for table
  displayedColumns = ['Curriculum', this.monthList];
  // displayedColumns = ['Curriculum', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  errMsg = '';

  // for curriculum selection
  curriculaControl = new FormControl('', [Validators.required]);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private ref: ChangeDetectorRef, private batchService: BatchService, private curriculaService: CurriculaService,
              private trainerService: TrainerService, private notificationService: NotificationService) {
    this.getAllCurriculum();
    this.getAllBatches();
    this.getAllTrainer();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewChecked() {
    this.ref.detectChanges();
  }
  // error message
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }
  // get all batches
  getAllBatches() {
    this.batchService.getAll().subscribe(batch => {
      this.batch = batch;
      console.log(this.batch);
    }, err => {
      console.log(err);
      this.showToast('Failed to fetch batch');
      });
  }
  // get all curriculum
  getAllCurriculum() {
    this.curriculaService.getAll().subscribe(curricula => {
      this.curricula = curricula;
      console.log(this.curricula);
    }, err => {
      console.log(err);
      this.showToast('Failed to fetch curricula');
      });
  }
  // get all trainer
  getAllTrainer() {
    this.trainerService.getAll().subscribe(trainer => {
      this.trainer = trainer;
      console.log(this.trainer);
    }, err => {
      console.log(err);
      this.showToast('Failed to fetch trainer');
    });
  }
  genCard(evt) {
    evt.stopPropagation();
    const temp: any = {};
    temp.requiredGrads = 13;
    temp.requiredBatches = 1;
    temp.hireDate = this.hireDate;
    // temp.startDate = new Date();
    // temp.requiredGrads = this.rc.requiredGrads;
    // temp.hireDate = new Date();
    // temp.requiredBatches = this.rc.requiredBatches;
    // temp.startDate = this.rc.startDate;
    // temp.formattedStartDate = this.rc.formattedStartDate;
    // temp.batchType = this.batch;
    this.cardArr.push(temp);
    console.log(this.cardArr);
  }

  exportToCSV(evt, name) {
    evt.stopPropagation();
    new Angular2Csv(ELEMENT_DATA, name);
  }
  openMenu(evt) {
    evt.stopPropagation();
  }
  /* FUNCTION - This method will compute the required batch start date, given a required hire date */
  calcStartDate(requiredDate, index, evt) {
    const tempDate = new Date(requiredDate);
    const startDate = (requiredDate === undefined) ? (new Date()) : tempDate;
    console.log(startDate);
    // startDate.setDate(startDate.getDate() - (7 * batchlength));
    startDate.setDate(startDate.getDate() - (7 * 11));
    // push the start date to the closest Monday
    switch (startDate.getDay()) {
      case 0 :
        startDate.setDate(startDate.getDate() + 1);
        break;
      case 1 :
        startDate.setDate(startDate.getDate() + 0);
        break;
      case 2 :
        startDate.setDate(startDate.getDate() - 1);
        break;
      case 3 :
        startDate.setDate(startDate.getDate() - 2);
        break;
      case 4 :
        startDate.setDate(startDate.getDate() - 3);
        break;
      case 5 :
        startDate.setDate(startDate.getDate() - 4);
        break;
      case 6 :
        startDate.setDate(startDate.getDate() - 5);
        break;
      default:
        break;
    }
    // format date to 'mm-dd-yyyy' and assign the output for easier user visibility and comprehension
    const wkDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const formattedDate = this.monthList[startDate.getMonth()] + '-' + startDate.getDate() + '-' + startDate.getFullYear()
      + '(' + wkDayArr[startDate.getDay()] + ')';
    // assigns tempDate to the objects 'hireDate'
    // console.log(tempDate);
    // console.log(this.cardArr[index].hireDate);
    // this.cardArr[index].hireDate = tempDate;
    // this value is used when creating specific batches from the card panel
    this.cardArr[index].startDate = startDate;
    // set the 'startdate' within 'cardArr' at the index value to be the formatted date
    this.cardArr[index].formattedStartDate = formattedDate;
  }
  /* FUNCTION - This method will compute the number of batches needed to be made, given the number of required Trainee's. */
  calcReqBatch(requiredTrainees, index) {
    // compute the total number of Batches estimated
    const neededBatches = Math.ceil(requiredTrainees / 15);

    // calculate the 'requiredBatches' data value in the card array
    this.cardArr[index].requiredBatches = neededBatches;
    // calculate the total number of desired batches
    this.cumulativeBatches();
  }
  /* FUNCTION - This method will assign the particular card objects 'batchType' variable to the selected value. */
  assignCurr(batchType, index) {
    this.cardArr[index].batchType = batchType;
    if (this.cardArr[index].requiredBatches > 0) {
      this.cumulativeBatches();
    }
  }
  /* FUNCTION - This method will generate the sum of all batch types held within the 'cardArr' variable,
  ultimately displaying them in the 'master card' on the reports tab. */
  cumulativeBatches() {
    this.totalJavaBatch = 0;
    this.totalNetBatch = 0;
    this.totalSDETBatch = 0;
    this.totalSalesforceBatch = 0;
    this.totalBigDataBatch = 0;
    this.totalCumulativeBatch = 0;
    for (const x in this.cardArr) {
      if ((this.cardArr[x].batchType)) {
        const batchVal = this.cardArr[x].batchType.currId;
        console.log(batchVal);
        switch (batchVal) {
          // switch case for JAVA batches
          case 1 :
            this.totalJavaBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for .Net batches
          case 2 :
            this.totalNetBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for SDET batches
          case 3 :
            this.totalSDETBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for Salesforce batches
          case 150 :
            this.totalSalesforceBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for BigData batches
          case 164 :
            this.totalBigDataBatch += this.cardArr[x].requiredBatches;
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          // switch case for Custom batches
          case 105 :
            this.totalCumulativeBatch += this.cardArr[x].requiredBatches;
            break;
          default :
            break;
        }
      }
    }
    console.log(this.totalCumulativeBatch);
  }
  /* FUNCTION - This method will assert that batches have valid credentials for submission */
  submissionValidityAssertion(index) {
    const flagArr = [0, 0, 0];
    let count = 0;
    let canSubmit = 0;
    const today = new Date();

    console.log(this.cardArr[index].startDate);
    console.log(today);
    if (this.cardArr[index].startDate <= today || this.cardArr[index].startDate === undefined) {
      this.errMsg = 'Invalid Hire Date';
      flagArr[1] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].requiredGrads === null) {
      this.errMsg = 'Requires Trainee\'s';
      flagArr[0] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].hireDate === '') {
      this.errMsg = 'Request Hire Date.';
      flagArr[1] = 1;
      canSubmit = 1;
    }
    if (this.cardArr[index].batchType === undefined) {
      this.errMsg = 'Invalid Batch Type.';
      flagArr[2] = 1;
      canSubmit = 1;
    }
    // Check if multiple input are missing
    for (const x in flagArr) {
      if (flagArr[x] === 1) {
        count = count + 1;
        if (count > 1) {
          this.errMsg = 'Multiple Input Requires';
        }
      }
    }
    return canSubmit;
  }
  /* FUNCTION - This method will generate a new 'card' in the cardArr object, which will be displayed to the user on the reports tab. */
  createBatch(batch, index) {
    const canSubmit = this.submissionValidityAssertion(index);
    // let newBatch: Batch;
    if (canSubmit === 1) {
      this.showToast(this.errMsg);
    } else if (canSubmit === 0) {     // Create batch with batchService
      console.log(batch);
      this.newBatch.name = '-';
      this.newBatch.startDate = batch.startDate;
      this.newBatch.endDate = batch.hireDate;
      this.newBatch.curriculum = batch.batchType.currId;
      console.log(this.newBatch);
      // newBatch.batchLocation = 'default location'; //get default location from setting service
      this.batchService.create(this.newBatch).subscribe(data => console.log('batch created sucessfully'),
          error => console.log('error creating batch'));
    }
  }
}

export interface Element {
  curriculum: String;
  month: Month;
}

export interface Month {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  june: number;
  july: number;
  aug: number;
  sept: number;
  oct: number;
  nov: number;
  dec: number;
}

const ELEMENT_DATA: Element[] = [
  {curriculum: 'Java', month: {jan: 0, feb: 0, mar: 0, apr: 0, may: 0, june: 0, july: 0, aug: 0, sept: 0, oct: 0, nov: 0, dec: 0}},
  {curriculum: 'Microservice', month: {jan: 0, feb: 0, mar: 0, apr: 0, may: 0, june: 0, july: 0, aug: 0, sept: 0, oct: 0, nov: 0, dec: 0}},
  {curriculum: 'Test', month: {jan: 0, feb: 0, mar: 0, apr: 0, may: 0, june: 0, july: 0, aug: 0, sept: 0, oct: 0, nov: 0, dec: 0}},
  {curriculum: '.NET', month: {jan: 0, feb: 0, mar: 0, apr: 0, may: 0, june: 0, july: 0, aug: 0, sept: 0, oct: 0, nov: 0, dec: 0}}
];
