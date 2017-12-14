import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource, MatCheckbox} from '@angular/material';
import {Batch} from '../domain/batch';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  batchValues = ['Checkbox', 'Name', 'Curriculum', 'Focus', 'Trainer/Co-Trainer', 'Location', 'Building', 'Room', 'StartDate', 'EndDate', 'Icons'];
  batchData = new MatTableDataSource(BatchData);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.batchData.sort = this.sort;
  }

}


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const BatchData: Batch[] = [
  {name: 'batch1', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'},
  {name: 'batch2', startDate: new Date('February 4, 2017 10:13:00'), endDate: new Date('February 14, 2017 20:24:00'),
    curriculum: 'Java', focus: 'Microservices', trainer: 'Steve', cotrainer: 'Sarah', location: 'here', building: 'buildo', room: 'roo'}
];
