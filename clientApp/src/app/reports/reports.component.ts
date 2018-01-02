import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Angular2Csv} from 'angular2-csv';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit {
  // for creating new projection
  cardArr = [];
  // use for getting the current date, and calculation of the hire date
  monthList = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  year = new Date().getFullYear();
  today = new Date().getDate();
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

  // for curriculum selection
  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  genCard(evt) {
    evt.stopPropagation();
    const temp: any = {};
    temp.requiredGrads = 13;
    // temp.requiredGrads = this.rc.requiredGrads;
    // temp.reqDate = new Date();
    // temp.requiredBatches = this.rc.requiredBatches;
    // temp.startDate = this.rc.startDate;
    // temp.formattedStartDate = this.rc.formattedStartDate;
    // temp.batchType = this.rc.batchType;
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
  calcStartDate(requiredDate, index) {
    const tempDate = new Date(requiredDate);
    const startDate = (requiredDate === undefined) ? (new Date()) : requiredDate;
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
    // assigns tempDate to the objects 'reqDate'
    this.cardArr[index].reqDate = tempDate;
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
    this.cardArr[index].requiedBatches = neededBatches;
  }
  /* FUNCTION - This method will generate the sum of all batch types held within the 'cardArr' variable,
  ultimately displaying them in the 'master card' on the reports tab. */
  cumulativeBatches() {
    for (const x in this.cardArr) {
      if ((this.cardArr[x].batchType)) {
        const batchVal = this.cardArr[x].batchType.currId;
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
