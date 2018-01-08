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
import { ENAMETOOLONG } from 'constants';



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
  nameList = [];

  isConcluded = false;

  batches: Batch[];
  filteredBatches: Batch[];
  trainers: Trainer[];
  curriculums: Curriculum[];
  locations: Locations[];
  buldings: Building[];
  catagories: string[];
  trainerNames: string[];


  curriculumslist: string;
  locationlist: string;
  buildinglist: string;
  trainerName: string;

  trainer: Trainer;

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
      },
      yAxis: {
        title: {
          text: ''
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
        this.trainerService.getById(entry.trainer).subscribe(trainerData => {
          this.trainer = trainerData;
          this.trainerName = (this.trainer.firstName + " " + this.trainer.lastName);
          this.nameList.push(this.trainerName);
          console.log(this.nameList);
          this.chart.yAxis[0].update({
            categories: this.nameList
          });
        })
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxisPosition,
            }]
          });
        yAxisPosition++;
      }
    });
  }
  
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

  // Concluded batches checkbox
  hide() {
    this.isConcluded = !this.isConcluded;
    console.log(this.isConcluded);
    while (this.chart.series.length > 0) {
      this.chart.series[0].remove(true);
    }
    if (this.isConcluded) {
      console.log(this.batches);
      this.filteredBatches = this.batches.filter(
        batch => batch.endDate > new Date()
      );
      let yAxiPosition = 0;
      for (const entry of this.filteredBatches) {
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxiPosition,
            }]
          });
        yAxiPosition++;
      }
    } else {
      while (this.chart.series.length > 0) {
        this.chart.series[0].remove(true);
      }
      let yAxiPosition = 0;
      for (const entry of this.filteredBatches) {
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxiPosition,
            }]
          });
        yAxiPosition++;
      }
    }
  }

<<<<<<< HEAD
  // Concluded batches checkbox
  hideBatchlessTrainers() {
    this.isConcluded = !this.isConcluded;
    console.log(this.isConcluded);
    while (this.chart.series.length > 0) {
      this.chart.series[0].remove(true);
    }
    if (this.isConcluded) {
      console.log(this.batches);
      this.filteredBatches = this.batches.filter(
        batch => batch.trainer
      );
      let yAxiPosition = 0;
      for (const entry of this.filteredBatches) {
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxiPosition,
            }]
          });
        yAxiPosition++;
      }
    } else {
      while (this.chart.series.length > 0) {
        this.chart.series[0].remove(true);
      }
      let yAxiPosition = 0;
      for (const entry of this.filteredBatches) {
        this.chart.addSeries(
          {
            name: entry.name,
            borderColor: 'gray',
            pointWidth: 20,
            data: [{
              x: entry.startDate,
              x2: entry.endDate,
              y: yAxiPosition,
            }]
          });
        yAxiPosition++;
      }
    }
  }

=======
>>>>>>> 100e208f739b67ae0841da0ba91d33da3b915cef
  setCurriculmList() {
    this.curriculumService.getAll().subscribe(curriculumData => {
      this.curriculums = curriculumData;
      for (const entry of this.curriculums) {
        this.curriculumslist = entry.name;
        this.curriculumList.push(this.curriculumslist);
      }
    });
  }

  setLocationList() {
    this.locationService.getAll().subscribe(locationData => {
      this.locations = locationData;
      for (const entry of this.locations) {
        this.locationlist = entry.name;
        this.locationList.push(this.locationlist);
      }
    });
  }

  setBuldingList() {
    this.buildingService.getAll().subscribe(buildingData => {
      this.buldings = buildingData;
      for (const entry of this.buldings) {
        this.buildinglist = entry.name;
        this.buldingList.push(this.buildinglist);
      }
    });
  }

  //This method gets a trainers name
  // getTrainerName(id: string): string {
  //   let tname = "";
  //   this.trainerService.getById(id).subscribe(trainerData => {
  //     this.trainer = trainerData;
  //     tname = this.trainer.firstName;
  //     //  console.log(tname);
  //   });
  //    console.log(tname.);
  //   return tname;
  // }
}