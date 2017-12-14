import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Batch} from '../domain/batch';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {

  panelOpenState = false;
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'test'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  batchValues = ['Name', 'Curriculum', 'Focus', 'Trainer/Co-Trainer', 'Location', 'Building', 'Room', 'StartDate', 'EndDate'];
  batchData = new MatTableDataSource(BatchData);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.batchData.sort = this.sort;
  }

}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

const BatchData: Batch[] = [
  {name: 'batch1', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'},
  {name: 'batch2', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'}
];
