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
  filteredData: Batch[];
  color = 'warn';
  mode = 'determinate';
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
      const currentDate = new  Date();
      for (const entry of this.BatchData) {
        entry.progress = (currentDate.valueOf() - entry.startDate.valueOf()) / (entry.endDate.valueOf() - entry.startDate.valueOf()) * 100;
      }

      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
      this.batchData = new MatTableDataSource(this.BatchData);
    });
  }

  filterByProgress() {
      this.filteredData = this.BatchData.filter(
        batch => batch.progress > 0 && batch.progress < 100
      );
      this.batchData = new MatTableDataSource(this.filteredData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
  }

  filterByNone() {
      this.batchData = new MatTableDataSource(this.BatchData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
  }

  filterByTwoWeeksAhead() {
    let days = 14 * 1000 * 3600 * 24;

    this.filteredData = this.BatchData.filter(
      batch => ((batch.startDate.valueOf() - new Date().valueOf()) >= 0) &&
                        ((batch.startDate.valueOf() - new Date().valueOf()) <= days)
    );
    this.batchData = new MatTableDataSource(this.filteredData);
    this.batchData.sort = this.sort;
    this.batchData.paginator = this.paginator;
  }
}
