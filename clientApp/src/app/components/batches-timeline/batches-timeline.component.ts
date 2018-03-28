import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-timeline',
  templateUrl: './batches-timeline.component.html',
  styleUrls: ['./batches-timeline.component.css']
})
export class BatchesTimelineComponent implements OnInit {
  // values from current site
  width = 1536;
  height = 2067;

  batches = [
    // test data
    {
      name: 'Feb02-18',
      cirriculum: 'Java',
      focus: 'none',
      start_date: new Date(2018, 2, 5),
      end_date: new Date(2018, 4, 29),
      trainer: 'August',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'Feb02-18',
      cirriculum: 'Java',
      focus: 'none',
      start_date: new Date(2016, 2, 5),
      end_date: new Date(2016, 4, 29),
      trainer: 'August',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'Feb02-18',
      cirriculum: 'Java',
      focus: 'none',
      start_date: new Date(2017, 2, 5),
      end_date: new Date(2017, 4, 29),
      trainer: 'August',
      location: 'Viginia',
      building: '1',
      room: '101'
    },
    {
      name: 'Feb02-18',
      cirriculum: 'Java',
      focus: 'none',
      start_date: new Date(2018, 6, 5),
      end_date: new Date(2018, 8, 29),
      trainer: 'August',
      location: 'Viginia',
      building: '1',
      room: '101'
    }
  ];

  // default values for formatting
  column_width = 50;
  swimlane_x_ofs = 50;
  swimlane_y_ofs = 20;

  // editable data
  start_date: Date;
  end_date: Date;
  trainers_per_page = 0;

  // generated data
  trainers = [];

  constructor() {}

  ngOnInit() {
    if (this.trainers_per_page === 0) {
      this.trainers_per_page = this.batches.length;
    }
    // make list of trainers
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      const trainer = batch.trainer;
      if (!this.trainers.includes(trainer)) {
        this.trainers.push(trainer);
      }
    }
  }

  getBatchesRectangles() {
    const rects = [];
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      // let duration =
      rects.push({ x: 0 + i * this.column_width, y: 10, w: 20, h: 100, dur: 8, color: '#ffaa44' });
    }
    return rects;
  }
}
