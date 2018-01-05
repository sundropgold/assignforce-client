import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import 'highcharts/adapters/standalone-framework.src';
import * as xRange from 'highcharts/modules/xrange.js';
import { BatchService } from '../services/batch.service';
import { Batch } from '../domain/batch';

const Highcharts = require('highcharts/highcharts.src');

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements AfterViewInit, OnInit {
  curriculum = new FormControl();
  focus = new FormControl();
  location = new FormControl();
  bulding = new FormControl();
  curriculumList = ['Java', '.NET', 'SDET', 'HIBERNATE', 'SPRING', 'BIG DATA'];
  focusList = ['Java', '.NET', 'SDET', 'HIBERNATE', 'SPRING', 'BIG DATA'];
  locationList = ['Java', '.NET', 'SDET', 'HIBERNATE', 'SPRING', 'BIG DATA'];
  buldingList = ['Java', '.NET', 'SDET', 'HIBERNATE', 'SPRING', 'BIG DATA'];

  batches: Batch[];

  batchTimeLine: any;

  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  private chart: any;

  constructor(
    private batchService: BatchService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    xRange(Highcharts);

    this.chart = Highcharts.chart(this.container.nativeElement, {
      chart: {
        type: 'xrange'
      },
      title: {
        text: 'Batches'
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: ''
        },
        categories: [''],
        reversed: true
      },
      // tooltip: {
      //   pointFormat: '{series.name}: <b>{point.y}</b>',
      //   backgroundColor: '#FCFFC5',
      //   valueSuffix: 'cm',
      //   borderWidth: 3,
      //   borderRaduis: 6,
      //   shared: true
      // },

      series: [/*{
        name: 'Trainer 1',
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 10, 21),
          x2: Date.UTC(2014, 11, 2),
          y: 0,
        }]
      },
      {
        name: 'Trainer 2',
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 11, 9),
          x2: Date.UTC(2014, 11, 19),
          y: 1,
        }]
      },
      {
        name: 'Trainer 3',
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 11, 10),
          x2: Date.UTC(2014, 11, 23),
          y: 2,
        }],
        dataLabels: {
          enabled: true
        }
      }*/]
    });
    this.getAllBatches();
  }

  getAllBatches() {
    this.batchService.getAll().subscribe(batchData => {
      this.batches = batchData;
      for (const entry of this.batches) {
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: 0,
            }]
          });
      }
    });
  }

  getAllConcludedBatches() {
    this.batchService.getAll().subscribe(batchData => {
      this.batches = batchData;
      for (const entry of this.batches) {
        if (entry.endDate < new Date()) {
          this.chart.addSeries(
            {
              name: entry.name,
              borderColor: 'gray',
              pointWidth: 20,
              data: [{
                x: entry.startDate,
                x2: entry.endDate,
                y: 0,
              }]
            });
        }
      }
    });
  }

  getAllBatchesWithTrainers() {
    this.batchService.getAll().subscribe(batchData => {
      this.batches = batchData;
      for (const entry of this.batches) {
        if (entry.trainer) {
          this.chart.addSeries(
            {
              name: entry.name,
              borderColor: 'gray',
              pointWidth: 20,
              data: [{
                x: entry.startDate,
                x2: entry.endDate,
                y: 0,
              }]
            });
        }
      }
    });
  }
}
