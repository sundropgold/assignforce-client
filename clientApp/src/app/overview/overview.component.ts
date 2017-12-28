import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Angular2Csv } from 'angular2-csv/Angular2-csv';
import {BatchService} from '../services/batch.service';
import {Batch} from '../domain/batch';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  BatchData: Batch[];
  batchData = new MatTableDataSource(this.BatchData);
  batchValues = ['name', 'curriculum', 'trainer', 'location', 'building', 'room', 'startDate', 'endDate', 'progress'];

  color = 'warn';
  mode = 'determinate';
  value = 50;
  bufferValue = 100;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private batchService: BatchService) {
    }

    ngOnInit() {
      this.getAll();
    }
  ngAfterViewInit() {
    this.batchData.sort = this.sort;
    this.batchData.paginator = this.paginator;
    this.batchData = new MatTableDataSource(this.BatchData);
  }

  exportToCSV(evt) {
    evt.stopPropagation();
   // this.csvService.download(this.dataSource, 'Batches');
    new Angular2Csv(this.BatchData, 'batches');
  }

  openMenu(evt) {
    evt.stopPropagation();
  }

  getAll() {
    this.batchService.getAll().subscribe(data => {
      this.BatchData = data;
      this.batchData = new MatTableDataSource(this.BatchData);
      var currentDate = new  Date();
      for (let entry of this.BatchData) {
        entry.progress = (currentDate.valueOf() - entry.startDate.valueOf()) / (entry.endDate.valueOf() - entry.startDate.valueOf()) * 100;
      }
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
    });
  }
}
