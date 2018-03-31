import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Batch } from '../../model/Batch';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  color = 'warn';
  mode = 'determinate';
  value = 0;
  bufferValue = 75;

  // ----------------------- NEW CODE FROM NEW HOPE -----------------------------------
  batchList: any[] = [
    {
      name: 'Java J2EE',
      startDate: new Date(2018, 2, 31),
      endDate: new Date(2018, 5, 4),
      curriculum: 'Java',
      focus: 'Pivotal',
      trainer: 'August',
      cotrainer: 'Mitch',
      location: 'Virginia',
      building: 'Plaza1',
      room: '214',
      progress: 0
    },
    {
      name: '.Net',
      startDate: new Date(2018, 1, 1),
      endDate: new Date(2018, 4, 1),
      curriculum: 'Java',
      focus: 'MicroService',
      trainer: 'Mitch',
      cotrainer: '',
      location: 'Florida',
      building: 'CapitalB',
      room: '452',
      progress: 0
    },
    {
      name: 'Appian',
      startDate: new Date(2018, 1, 15),
      endDate: new Date(2018, 4, 15),
      curriculum: 'C++',
      focus: 'Java',
      trainer: 'Bob',
      cotrainer: '',
      location: 'New York',
      building: 'EmpireState',
      room: '834',
      progress: 0
    },
    {
      name: 'SysAdmin',
      startDate: new Date(2018, 4, 1),
      endDate: new Date(2018, 7, 1),
      curriculum: 'Python',
      focus: 'Magic',
      trainer: 'Jerry',
      cotrainer: 'Dennis',
      location: 'Texas',
      building: 'BigBill',
      room: 'B312',
      progress: 0
    }
  ];
  displayedBatchList: any[];
  displayedColumns = [
    'name',
    'startDate',
    'endDate',
    'curriculum',
    'focus',
    'trainer',
    'location',
    'building',
    'room',
    'progress'
  ];

  dataSource = new MatTableDataSource(this.displayedBatchList);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.batchList.forEach(batch => {
      batch.progress = this.getCurrentProgress(batch);
    });
    this.applyFilter(0);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // -------------------------------- PREVIOUS BATCH'S METHODS -------------------------------------------
  exportToCSV(evt) {
    evt.stopPropagation();
    // this.csvService.download(this.dataSource, 'Batches');
    const angular2Csv = new Angular2Csv(this.batchList, 'batches');
  }

  openMenu(evt) {
    evt.stopPropagation();
  }
  // --------------------------------- END OF THE OLD -----------------------------------------------------

  // ----------------------------------BEGIN OPERATION NEW HOPE -------------------------------------------
  applyFilter(filterType: number) {
    /**
     *  FILTER TYPE!!!
     *  0 - By All
     *  1 - In Progress
     *  2 - Beginging in two weeks
     */
    this.displayedBatchList = [];
    if (filterType === 0) {
      this.displayedBatchList = this.batchList;
    } else if (filterType === 1) {
      this.batchList.forEach(batch => {
        const index = this.batchList.indexOf(batch);
        if (batch.progress > 0 && batch.progress < 100) {
          this.displayedBatchList.push(batch);
        }
      });
    } else if (filterType === 2) {
      this.batchList.forEach(batch => {
        const index = this.batchList.indexOf(batch);
        if (batch.progress === 0) {
          if (this.getCurrentWeekOfBatch(batch.startDate) > -2) {
            this.displayedBatchList.push(batch);
          }
        }
      });
    }
    this.dataSource.data = this.displayedBatchList;
  }

  computeNumOfWeeksBetween(startDate: Date, endDate: Date): number {
    const numberOfDays = Math.abs(<any>endDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const numberOfWeeks = Math.round(numberOfDays / 7);
    return numberOfWeeks;
  }

  // IF RETURN IS POSITIVE, BATCH HAS STARTED/IS IN SESSION FOR # WEEKS.
  // IF RETURN IS NEGATIVE, BATCH HAS NOT STARTED/WILL START IN # WEEKS.
  getCurrentWeekOfBatch(startDate: Date): number {
    const currentDate = new Date(Date.now());
    const numberOfDays = (<any>currentDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.round(numberOfDays / 7);
    return weekNumber;
  }

  getCurrentProgress(batch: any): number {
    const training_duration = this.computeNumOfWeeksBetween(batch.startDate, batch.endDate);
    if (training_duration === 0) {
      return 0;
    }
    const batch_current_week = this.getCurrentWeekOfBatch(batch.startDate);
    if (batch_current_week <= 0) {
      return 0;
    }
    const progress = batch_current_week / training_duration;
    return progress * 100;
  }
}
