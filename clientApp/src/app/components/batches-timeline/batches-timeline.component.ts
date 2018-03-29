import { Component, OnInit } from '@angular/core';
import { Batch } from '../../model/batch';

@Component({
  selector: 'app-batches-timeline',
  templateUrl: './batches-timeline.component.html',
  styleUrls: ['./batches-timeline.component.css']
})
export class BatchesTimelineComponent implements OnInit {
  // values from current site
  width = 1536;
  height = 2067;

  // b2: Batch = {

  //   name: 'Feb02-18',
  //   curriculum: 'Java',
  //   focus: 'none',
  //   startDate: new Date(2018, 2, 5),
  //   endDate: new Date(2018, 4, 29),
  //   trainer: 'August Duet',
  //   cotrainer: 'Mitch',
  //   location: 'Viginia',
  //   building: '1',
  //   room: '101'
  // }
  batches = [
    // test data
    {
      name: 'Feb02-18',
      curriculum: 'Java',
      focus: 'none',
      startDate: new Date(2018, 1, 5),
      endDate: new Date(2018, 4, 29),
      trainer: 'August Duet',
      cotrainer: 'Mitch',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'WWWWWWW',
      curriculum: 'Custom',
      focus: 'none',
      startDate: new Date(2018, 3, 12),
      endDate: new Date(2018, 7, 29),
      trainer: 'TEST longtrainername here',
      cotrainer: null,
      location: 'Viginia',
      building: null,
      room: null
    },
    {
      name: 'AAA',
      curriculum: '.NET',
      focus: 'none',
      startDate: new Date(2018, 0, 1),
      endDate: new Date(2018, 0, 8),
      trainer: 'TEST longtrainername here',
      cotrainer: null,
      location: null,
      building: null,
      room: null
    },
    {
      name: 'Feb03-16',
      curriculum: 'Java',
      focus: 'none',
      startDate: new Date(2016, 2, 5),
      endDate: new Date(2016, 4, 29),
      trainer: 'August',
      cotrainer: 'Mitch',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'Feb02-17',
      curriculum: 'Java',
      focus: 'none',
      startDate: new Date(2017, 2, 5),
      endDate: new Date(2017, 4, 29),
      trainer: 'Emily',
      cotrainer: 'Mitch',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'Jun06-18',
      curriculum: 'Java',
      focus: 'none',
      startDate: new Date(2018, 6, 20),
      endDate: new Date(2018, 8, 29),
      trainer: 'August',
      cotrainer: 'Mitch',
      location: 'Viginia',
      building: '1',
      room: '101'
    }
  ];

  // default values for formatting
  column_width = 50;
  swimlane_x_ofs = 50;
  swimlane_y_ofs = 20;
  months = [];

  // editable data
  startDate: Date;
  endDate: Date;
  trainers_per_page = 0;

  constructor() {}

  zooming = false;
  zoomingFrom: number;
  zoomingLine = { x1: 0, x2: 0, y1: 0, y2: 0 };

  // generated data
  trainers = [];
  today_line = { x1: 0, x2: 0, y1: 0, y2: 0 };

  // initialize dates
  ngOnInit() {
    if (this.trainers_per_page === 0) {
      this.trainers_per_page = this.batches.length;
    }
    this.updateTrainers();
    // set start date to 3 months ago
    const today = new Date(Date.now());
    console.log(today.getMonth());
    this.startDate = new Date(today);
    this.startDate.setMonth(this.startDate.getMonth() - 3);
    // set end date to 6 months ago
    this.endDate = new Date(today);
    this.endDate.setMonth(this.endDate.getMonth() + 6);
    this.updateTodayLine();
  }

  // returns the appropriate color for the curriculum curriculum type
  getColorForcurriculum(type) {
    let color = '';
    switch (type.toLowerCase()) {
      case 'java':
        color = '#1c77b4'; //java
        break;
      case '.net':
        color = '#ff7f0e'; //.net
        break;
      case 'sdet':
        color = '#aec7e8'; //sdet
        break;
      default:
        color = '#ffbb78'; //custom
        break;
    }
    return color;
  }

  // returns the list of rectangles that represent each batch
  getBatchesRectangles() {
    const rects = [];
    const full_duration = this.endDate.valueOf() - this.startDate.valueOf();
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      let duration = batch.endDate.valueOf() - batch.startDate.valueOf();
      duration = Math.floor(duration / (1000 * 60 * 60 * 24 * 7)); // ms to weeks

      const color = this.getColorForcurriculum(batch.curriculum);
      const w = 20;

      const trainer_index = this.trainers.findIndex(t => t === batch.trainer);

      const x = this.swimlane_x_ofs + trainer_index * this.column_width + (this.column_width - w) * 0.5;
      const y = (batch.startDate.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      const endy = (batch.endDate.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      const h = endy - y;
      const durarray = duration
        .toString()
        .split(' ')
        .concat('WEEKS'.split(''));
      //console.log('batch ' + batch.name + '\n rect: ' + ' x:' + x + ' y:' + y + ' h:' + h);
      rects.push({ x: x, y: y, w: w, h: h, dur: durarray, color: color });
    }
    return rects;
  }

  // returns a list of the lines that seperate columns
  getSwimlanes() {
    const lines = [];
    for (let i = 0; i < this.trainers.length + 1; i++) {
      // let duration =
      const xpos = this.swimlane_x_ofs + i * this.column_width;
      lines.push({ x1: xpos, y1: this.swimlane_y_ofs, x2: xpos, y2: this.height - this.swimlane_y_ofs });
    }
    return lines;
  }

  // makes the list of trainers
  updateTrainers() {
    this.trainers = [];
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      const trainer = batch.trainer;
      if (!this.trainers.includes(trainer)) {
        this.trainers.push(trainer);
      }
    }
  }

  // returns the list of trainers with their positions
  getTrainers() {
    const trainerposs = [];
    for (let i = 0; i < this.trainers.length; i++) {
      const trainer = this.trainers[i];
      let left = 1;
      if (i === 0) {
        left += this.swimlane_x_ofs;
      }
      const width = this.column_width;
      trainerposs.push({ name: trainer, left: left, width: width });
    }
    return trainerposs;
  }

  // returns the list of months to display and their position
  getMonths() {
    const months = [];
    // if more than 15 months, show every quater (by starting month name) instead
    const ms_to_months = 1000 * 60 * 60 * 24 * 30;
    const full_duration = this.endDate.valueOf() - this.startDate.valueOf();
    let durmonths = Math.floor(full_duration / ms_to_months);
    const startMonth = this.startDate.getMonth();
    const startYear = this.startDate.getFullYear();
    //console.log(durmonths+' are between '+this.startDate+' and '+this.endDate+'\ny:'+startYear+' m:'+startMonth);
    let useQuaterly = false;
    // let useYearly = false;
    if (durmonths >= 16) {
      useQuaterly = true;
      durmonths /= 4;
    }
    for (let i = 0; i < durmonths; i++) {
      const idate = new Date(startYear, startMonth);
      idate.setMonth(this.startDate.getMonth() + i);
      const month = idate.getMonth();
      if (useQuaterly && month % 4 !== 0) {
        continue;
      }
      let name = 'm' + month;
      switch (month) {
        case 0:
          name = idate.getFullYear() + '';
          break;
        case 1:
          name = 'Feb';
          break;
        case 2:
          name = 'Mar';
          break;
        case 3:
          name = 'Apr';
          break;
        case 4:
          name = 'May';
          break;
        case 5:
          name = 'Jun';
          break;
        case 6:
          name = 'Jul';
          break;
        case 7:
          name = 'Aug';
          break;
        case 8:
          name = 'Sep';
          break;
        case 9:
          name = 'Oct';
          break;
        case 10:
          name = 'Nov';
          break;
        case 11:
          name = 'Dec';
          break;
      }

      const y = this.swimlane_y_ofs + (idate.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      const x = 2;
      months.push({ name: name, x: x, y: y });
    }
    return months;
  }

  // returns the line for today
  updateTodayLine() {
    const y =
      (new Date(Date.now()).valueOf() - this.startDate.valueOf()) /
      (this.endDate.valueOf() - this.startDate.valueOf()) *
      this.height;
    this.today_line = { x1: 0, x2: this.width, y1: y, y2: y };
  }

  // start zoom at mouse
  bgmousedown(event) {
    this.zooming = true;
    const y = event.clientY - event.target.getBoundingClientRect().top;
    this.zoomingFrom = y; // + this.startDate.valueOf();
    this.zoomingLine = { x1: 0, x2: this.width, y1: y, y2: y };
  }
  // finish zoom
  bgmouseup(event) {
    this.zooming = false;
  }
  // update zoom by delta
  bgmousemove(event) {
    if (this.zooming) {
      const y = event.clientY - event.target.getBoundingClientRect().top;
      const dy = y - this.zoomingFrom;
      console.log('mp ' + dy);
      // this.startDate.setDate()
    }
  }

  // show tooltip at mouse
  batchmousemove(event) {
    console.log('batchmousemove');
  }
  // hide tooltip
  batchmouseleave(event) {
    console.log('batchmouseleave');
  }
}
