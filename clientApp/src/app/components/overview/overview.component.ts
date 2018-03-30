import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Batch } from '../../model/batch';

// --------------------------------- HARD CODED ELEMENT DATA... SHOULD BE DELETED --------------------------------------

// const ELEMENT_DATA: Element[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
// ];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  // ---------------------- OLD DEFAULT CODE FROM LAST BATCH --------------------------
  // displayedColumns = ['position', 'name', 'weight', 'symbol', 'progress'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  //-----------------------------------------------------------------------------------
  color = 'warn';
  mode = 'determinate';
  value = 10;
  bufferValue = 75;

  // ----------------------- NEW CODE FROM NEW HOPE ----------------------------------
  // ----------------------- NEW CODE FROM NEW HOPE -----------------------------------

  batchList: Batch[] = [
    {
      name: 'Calvin',
      startDate: new Date(0, 0, 0),
      endDate: new Date(1, 1, 1),
      curriculum: 'Java',
      focus: 'InfoSys',
      trainer: 'August',
      cotrainer: 'Mitch',
      location: 'Virginia',
      building: 'Plaza1',
      room: '214'
    }
  ];

  displayedColumns = [
    'name',
    'startDate',
    'endDate',
    'curriculum',
    'focus',
    'trainer',
    'cotrainer',
    'location',
    'building',
    'room',
    'progress'
  ];
  dataSource = new MatTableDataSource(this.batchList);
  // Booleans for testing
  isExported = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // --------------------------------
  exportToCSV(evt) {
    evt.stopPropagation();
    // this.csvService.download(this.dataSource, 'Batches');
    const angular2Csv = new Angular2Csv(this.batchList, 'batches');
    this.isExported = true;
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

    if (filterType === 0) {
      // Todo
    }
  }

  computeNumOfWeeksBetween(startDate: Date, endDate: Date): number {
    const numberOfDays = Math.abs(<any>endDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const numberOfWeeks = Math.round(numberOfDays / 7);
    return numberOfWeeks;
  }

  getCurrentWeek(startDate: Date): number {
    const currentDate = new Date(Date.now());
    const numberOfDays = Math.abs(<any>currentDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.round(numberOfDays / 7);
    return weekNumber;
  }

  getCurrentProgress(batch: Batch): number {
    const training_duration = this.computeNumOfWeeksBetween(batch.startDate, batch.endDate);

    if (training_duration === 0) {
      return 0;
    }

    const batch_current_week = this.getCurrentWeek(batch.startDate);
    const progress = batch_current_week / training_duration;
    return progress * 100;
  }

  // getCurrentProgress(currentWeek:number, totalWeek:number):number{
  //   let progress = currentWeek/totalWeek;
  //   return progress*100;
  // }
}

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
