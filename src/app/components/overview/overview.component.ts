import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Batch } from '../../model/Batch';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  // ----------------------- NEW CODE FROM NEW HOPE -----------------------------------
  selectedFilter: number;
  panelTitle: string;
  batchList: any[] = [];
  displayedBatchList: any[];
  displayedColumns = [
    'name',
    'curriculum',
    'trainer',
    'location',
    'building',
    'room',
    'startDate',
    'endDate',
    'progress'
  ];

  dataSource = new MatTableDataSource(this.displayedBatchList);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private batchController: BatchControllerService) {}

  ngOnInit() {
    //TODO -- use the batch-controller.service
    this.batchController.getAllBatches().subscribe(blist => {
      blist.forEach(batch => {
        // This is an object that encapsulates the batch object's properties and a progress number.
        const batchObj = {
          name: batch.name,
          curriculum: batch.curriculum.name,
          trainer: batch.trainer.firstName + ' ' + batch.trainer.lastName,
          cotrainer: batch.cotrainer,
          location: batch.batchLocation.locationName,
          building: batch.batchLocation.buildingName,
          room: batch.batchLocation.roomName,
          startDate: batch.startDate,
          endDate: batch.endDate,
          progress: 0
        };
        this.batchList.push(batchObj);

        // Calculating and updating the progress of each batch.
        this.batchList.forEach(batchOb => {
          batchOb.progress = this.getCurrentProgress(batchOb);
        });

        // This starts the view on showing All batches.
        this.applyFilter(0);
      });
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // -------------------------------- PREVIOUS BATCH'S METHODS -------------------------------------------
  exportToCSV(evt) {
    evt.stopPropagation();
    // this.csvService.download(this.dataSource, 'Batches');
    const angular2Csv = new Angular2Csv(this.displayedBatchList, 'batches');
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
    this.selectedFilter = filterType;
    this.displayedBatchList = [];
    if (filterType === 0) {
      this.displayedBatchList = this.batchList;
      this.panelTitle = 'All Batches';
    } else if (filterType === 1) {
      this.batchList.forEach(batchObj => {
        if (batchObj.progress > 0 && batchObj.progress < 100) {
          this.displayedBatchList.push(batchObj);
        }
      });

      if (this.displayedBatchList.length < 1) {
        this.panelTitle = 'No Batches In Progress';
      } else {
        this.panelTitle = 'Batches In Progress';
      }
    } else if (filterType === 2) {
      this.batchList.forEach(batchObj => {
        if (batchObj.progress === 0) {
          if (this.getCurrentWeekOfBatch(batchObj.startDate) > -2) {
            this.displayedBatchList.push(batchObj);
          }
        }
      });

      if (this.displayedBatchList.length < 1) {
        this.panelTitle = 'No Batches Beginning in Two Weeks';
      } else {
        this.panelTitle = 'Batches Beginning in Two Weeks';
      }
    }
    this.dataSource.data = this.displayedBatchList;
  }

  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    const numberOfDays = Math.abs(<any>endDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const numberOfWeeks = Math.floor(numberOfDays / 7);
    return numberOfWeeks;
  }

  // IF RETURN IS POSITIVE, BATCH HAS STARTED/IS IN SESSION FOR # WEEKS.
  // IF RETURN IS NEGATIVE, BATCH HAS NOT STARTED/WILL START IN # WEEKS.
  getCurrentWeekOfBatch(startDate: number): number {
    const currentDate = new Date(Date.now());
    const numberOfDays = (<any>currentDate - <any>startDate) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.floor(numberOfDays / 7);
    return weekNumber;
  }

  getCurrentProgress(batchObj): number {
    const training_duration = this.computeNumOfWeeksBetween(batchObj.startDate, batchObj.endDate);
    if (training_duration === 0) {
      return 0;
    }
    const batch_current_week = this.getCurrentWeekOfBatch(batchObj.startDate);
    if (batch_current_week <= 0) {
      return 0;
    }
    let progress = batch_current_week / training_duration;
    progress = progress * 100;
    if (progress > 100) {
      return 100;
    }
    return progress;
  }
}
