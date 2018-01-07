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
import { TrainerService } from './../services/trainer.service';
import { Trainer } from './../domain/trainer';
import { CurriculaService } from './../services/curricula.service';
import { Curriculum } from './../domain/curriculum';
import { LocationService } from './../services/location.service';
import { Locations } from './../domain/locations';
import { BuildingService } from './../services/building.service';
import { Building } from './../domain/building';



const Highcharts = require('highcharts/highcharts.src');

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements AfterViewInit, OnInit {
  batches: Batch[];
  trainers: Trainer[];
  curriculums: Curriculum[];
  locations: Locations[];
  buldings: Building[];


  curriculumslist: string;
  locationlist: string;
  buildinglist: string;

  trainer: Trainer;

  curriculum = new FormControl();
  focus = new FormControl();
  location = new FormControl();
  bulding = new FormControl();

  curriculumList = [];
  focusList = ['Java', '.NET', 'SDET', 'HIBERNATE', 'SPRING', 'BIG DATA'];
  locationList = [];
  buldingList = [];

  batchTimeLine: any;

  @ViewChild('container', { read: ElementRef }) container: ElementRef;

  private chart: any;

  constructor(
    private batchService: BatchService,
    private trainerService: TrainerService,
    private curriculumService: CurriculaService,
    private locationService: LocationService,
    private buildingService: BuildingService
  ) { }

  ngOnInit() {
    this.setCurriculmList();
    this.setLocationList();
    this.setBuldingList();
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
        min: new Date().getTime()
      },
      yAxis: {
        title: {
          text: 'Trainers'
        },
        categories: [],
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

      series: []
    });
    this.getAllBatches();
  }

  getAllBatches() {
    let yAxisPosition = 0; //Sets the Y-axis
    let name = [];
    this.batchService.getAll().subscribe(batchData => {
      this.batches = batchData;
      for (const entry of this.batches) {
        // this.trainerService.getById(entry.trainer).subscribe(trainerData => {
        //   this.trainer = trainerData;
        //   for (const entry of this.trainers) {
        //     this.trainer.firstName = entry.firstName;
        //   }

        //   console.log(this.trainer.firstName);
        //})
        //this.getTrainerName(entry.trainer);
        this.chart.addSeries(
          {
            name: entry.name /*this.getTrainerName(entry.trainer)*/,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxisPosition,
            }]
          });
        // name[yAxiPosition] = entry.trainer;
        yAxisPosition++;
      }
    });
    // console.log(name);
  }

  // getAllConcludedBatches() {
  //   this.batchService.getAll().subscribe(batchData => {
  //     this.batches = batchData;
  //     for (const entry of this.batches) {
  //       if (entry.endDate < new Date()) {
  //         this.chart.addSeries(
  //           {
  //             name: entry.name,
  //             borderColor: 'gray',
  //             pointWidth: 20,
  //             data: [{
  //               x: entry.startDate,
  //               x2: entry.endDate,
  //               y: 0,
  //             }]
  //           });
  //       }
  //       else { }
  //     }
  //   });
  // }

  // getAllBatchesWithTrainers() {
  //   this.batchService.getAll().subscribe(batchData => {
  //     this.batches = batchData;
  //     for (const entry of this.batches) {
  //       if (entry.trainer) {
  //         this.chart.addSeries(
  //           {
  //             name: entry.name,
  //             borderColor: 'gray',
  //             pointWidth: 20,
  //             data: [{
  //               x: entry.startDate,
  //               x2: entry.endDate,
  //               y: 0,
  //             }]
  //           });
  //       }
  //     }
  //   });
  // }

  //This method gets a trainers name
  getTrainerName(id: string) {
    this.trainerService.getById(id).subscribe(trainerData => {
      this.trainer = trainerData;
      return this.trainer.firstName;
    });

  }

  setCurriculmList() {
    this.curriculumService.getAll().subscribe(curriculumData => {
      this.curriculums = curriculumData;
      for (const entry of this.curriculums) {
        this.curriculumslist = entry.name;
        this.curriculumList.push(this.curriculumslist);
      }
    })
  }

  setLocationList() {
    this.locationService.getAll().subscribe(locationData => {
      this.locations = locationData;
      for (const entry of this.locations) {
        this.locationlist = entry.name;
        this.locationList.push(this.locationlist);
      }
    })
  }

  setBuldingList() {
    this.buildingService.getAll().subscribe(buildingData => {
      this.buldings = buildingData;
      for (const entry of this.buldings) {
        this.buildinglist = entry.name;
        this.buldingList.push(this.buildinglist);
      }
    })
  }
}



