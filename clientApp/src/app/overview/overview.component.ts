import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Angular2Csv } from 'angular2-csv/Angular2-csv';
import {BatchService} from '../services/batch.service';
import {Batch} from '../domain/batch';
import {NotificationService} from '../services/notification.service';
import {SkillService} from '../services/skill.service';
import {CurriculaService} from '../services/curricula.service';
import {Curriculum} from '../domain/curriculum';
import {TrainerService} from '../services/trainer.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit {
  BatchData: Batch[];
  batchData = new MatTableDataSource(this.BatchData);
  batchValues = ['name', 'curriculumName', 'trainerName', 'location', 'building', 'room', 'startDate', 'endDate', 'progress'];

  color = 'warn';
  mode = 'determinate';
  value = 50;
  bufferValue = 100;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private batchService: BatchService,
                private curriculaService: CurriculaService,
                private trainerService: TrainerService,
                private notificationService: NotificationService) {
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
      var currentDate = new  Date();
      for (let entry of this.BatchData) {
        entry.progress = (currentDate.valueOf() - entry.startDate.valueOf()) / (entry.endDate.valueOf() - entry.startDate.valueOf()) * 100;
        this.curriculaService.getById(entry.curriculum)
          .subscribe(curriculumData => {
            entry.curriculumName = curriculumData.name;
          });
        this.trainerService.getById(entry.trainer)
          .subscribe(trainerData => {
            entry.trainerName = trainerData.firstName + ' ' + trainerData.lastName;
          });
        this.trainerService.getById(entry.cotrainer)
          .subscribe(cotrainerData => {
            entry.cotrainerName = cotrainerData.firstName + ' ' + cotrainerData.lastName;
          });
      }
      this.batchData = new MatTableDataSource(this.BatchData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
    });
  }
}
