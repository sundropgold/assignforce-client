import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Batch } from '../../model/batch';

@Component({
  selector: 'app-batches-timeline',
  templateUrl: './batches-timeline.component.html',
  styleUrls: ['./batches-timeline.component.css']
})
export class BatchesTimelineComponent implements OnInit, AfterViewInit {
  // todo make responsive
  // todo use mask
  // values from current site
  width = 1536;
  minWidth = 100;
  // width = window.screen.width;
  height = 2067;

  // test data
  batches = [
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

  // root element of the timeline. used for getting the relative mouse position
  @ViewChild('timelineroot') timelineRootElement: ElementRef;
  // trainer name. used to set the width
  @ViewChild('trainernames') trainernames: ElementRef;

  // default values for formatting
  column_width = 50;
  swimlane_x_ofs = 100;
  swimlane_y_ofs = 20;
  timescale_x_ofs = 80;

  // editable data
  startDate: Date;
  endDate: Date;
  trainers_per_page = 0;

  // zooming
  zooming = false;
  zoomingFrom: number;
  zoomingFromDate: number;
  zoomingLine = { x1: 0, x2: 0, y1: 0, y2: 0 };
  preZoomBeforeDuration: number;
  preZoomAfterDuration: number;
  zoomScale = 0.01; // px to zoom scale

  // tooltip
  tooltipActive = false;
  tooltipRect = { x: 0, y: 0, w: 0, h: 0, linespacing: 15, color: '#000000cc', triangle: '0,0 0,0 0,0' };
  tooltipData = [];
  tooltipTimeoutDur = 120;
  tooltipTimeoutTimer = null;
  tooltipSetThisFrame = false;
  tooltipDefaultColor = '#ffffff';
  tooltipTitleColor = '#FFA500';
  tooltipMidSectionColor = '#FFD700';
  tooltipNoneColor = '#FF6347';

  // other generated data
  trainers = [];
  today_line = { x1: 0, x2: 0, y1: 0, y2: 0 };

  constructor() {}

  // initialize data
  ngOnInit() {
    // todo get values from batches timeline component instead
    if (this.trainers_per_page === 0) {
      this.trainers_per_page = this.batches.length;
    }
    // set start date to 3 months ago
    const today = new Date(Date.now());
    this.startDate = new Date(today);
    this.startDate.setMonth(this.startDate.getMonth() - 3);
    // set end date to 6 months ago
    this.endDate = new Date(today);
    this.endDate.setMonth(this.endDate.getMonth() + 6);

    this.updateTrainers();
  }

  // setup page size
  ngAfterViewInit() {
    // causes exception if done without a short timeout
    setTimeout(() => {
      this.updateSize();
    }, 100);
  }

  // this is called when any of the filters are changed
  onFilterChange(evt) {
    console.log(evt);
    // todo update stuff
  }

  updateSize() {
    // set width to be the same size as the trainernames div, as it scales with the page
    this.width = this.trainernames.nativeElement.getBoundingClientRect().width;
    // - event.target.offsetWidth * 2;
    // todo determine height ?
    this.swimlane_x_ofs = (this.width - this.timescale_x_ofs) / 2 - this.trainers.length / 2 * this.column_width;
    this.swimlane_x_ofs = Math.max(this.timescale_x_ofs + 10, this.swimlane_x_ofs);
    // this.height = event.target.innerHeight * 2;
    // console.log(this.width + ' ' + this.height);
    this.updateTodayLine();
  }

  // makes the list of trainers
  updateTrainers() {
    this.trainers = [];
    // add all unique trainers found in the batches
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      const trainer = batch.trainer;
      if (!this.trainers.includes(trainer)) {
        this.trainers.push(trainer);
      }
    }
  }

  // updates the line for today
  updateTodayLine() {
    // calculate position of today_line
    const y =
      (new Date(Date.now()).valueOf() - this.startDate.valueOf()) /
      (this.endDate.valueOf() - this.startDate.valueOf()) *
      this.height;
    this.today_line = { x1: this.timescale_x_ofs, x2: this.width, y1: y, y2: y };
  }

  // makes a simple object for a tooltip line for reuseablility
  getTooltipLine(val, text) {
    // if it is null say there is none, or say it
    if (val != null) {
      return [
        { text: text + ': ', color: this.tooltipDefaultColor },
        { text: val, color: this.tooltipMidSectionColor }
      ];
    } else {
      return [
        { text: 'No ' + text.toLowerCase() + ' ', color: this.tooltipNoneColor },
        { text: 'for this batch.', color: this.tooltipDefaultColor }
      ];
    }
  }

  // sets the tooltip rect and tooltip data
  updateTooltip(batchid, mousepos) {
    // hide tooltip if zooming or mouse is out of range
    if (this.zooming || mousepos.y < 0) {
      this.tooltipActive = false;
      return;
    }

    // todo get batch from id
    const batch: Batch = null; //this.batches[2];
    if (batch == null) {
      console.log('no batch by that id!');
      this.tooltipActive = false;
      return;
    }

    // create text that goes on the tooltip
    const lines = [];
    // if (batch.curriculum != null) {
    //   lines.push([
    //     { text: batch.curriculum, color: this.tooltipTitleColor },
    //     { text: ' Batch', color: this.tooltipDefaultColor }
    //   ]);
    // } else {
    //   lines.push([{ text: 'No core curriculum.', color: this.tooltipNoneColor }]);
    // }
    // if (batch.focus != null) {
    //   lines.push([
    //     { text: 'w/ focus on ', color: this.tooltipDefaultColor },
    //     { text: batch.focus, color: this.tooltipTitleColor }
    //   ]);
    // } else {
    //   lines.push([
    //     { text: 'w/', color: this.tooltipDefaultColor },
    //     { text: 'no focus.', color: this.tooltipNoneColor }
    //   ]);
    // }
    lines.push([{ text: '----------', color: this.tooltipDefaultColor }]);
    // lines.push(this.getTooltipLine(batch.trainer, 'Trainer'));
    // lines.push(this.getTooltipLine(batch.cotrainer, 'Cotrainer'));
    // lines.push(this.getTooltipLine(batch.startDate.toDateString(), 'Start Date'));
    // lines.push(this.getTooltipLine(batch.endDate.toDateString(), 'End Date'));
    // lines.push([{ text: '----------', color: this.tooltipDefaultColor }]);
    // lines.push(this.getTooltipLine(batch.location, 'Location'));
    // lines.push(this.getTooltipLine(batch.building, 'Building'));
    // lines.push(this.getTooltipLine(batch.room, 'Room'));

    // get positioning of the tooltip rect
    // todo dynamic width based on text width
    const rectw = 250;
    const recth = this.tooltipRect.linespacing * lines.length + 5;
    const rectx = mousepos.x - rectw / 2;
    const recty = mousepos.y - recth - 12;
    const triangle_points =
      mousepos.x -
      5 +
      ',' +
      (mousepos.y - 12) +
      ' ' +
      mousepos.x +
      ',' +
      (mousepos.y - 2) +
      ' ' +
      (mousepos.x + 5) +
      ',' +
      (mousepos.y - 12);

    // update values
    this.tooltipData = lines;
    this.tooltipActive = true;
    this.tooltipRect.x = rectx;
    this.tooltipRect.y = recty;
    this.tooltipRect.w = rectw;
    this.tooltipRect.h = recth;
    this.tooltipRect.triangle = triangle_points;

    // clear timeout
    if (this.tooltipTimeoutTimer != null) {
      // console.log("clearing timeout");
      clearTimeout(this.tooltipTimeoutTimer);
      this.tooltipTimeoutTimer = null;
    }
    this.tooltipSetThisFrame = true;
  }

  // called when mouse moves, and it may not be over a batch
  updateTooltipVisibility() {
    // if tooltip was not just set
    if (!this.tooltipSetThisFrame) {
      // and the tooltip is active, and the timer is not already set
      if (this.tooltipActive && this.tooltipTimeoutTimer == null) {
        // start timeout
        // console.log("starting tooltip timeout timer");
        this.tooltipTimeoutTimer = setTimeout(() => {
          // hide the tooltip
          // console.log("tooltip time out");
          this.tooltipActive = false;
          this.tooltipTimeoutTimer = null;
        }, this.tooltipTimeoutDur);
      }
    }
    this.tooltipSetThisFrame = false;
  }

  // returns the appropriate color for the core curriculum type
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
    // make a rectangle for each batch
    for (let i = 0; i < this.batches.length; i++) {
      const batch = this.batches[i];
      // valueOf gives us ms, convert to weeks to get the duration this event takes
      let duration = batch.endDate.valueOf() - batch.startDate.valueOf();
      duration = Math.floor(duration / (1000 * 60 * 60 * 24 * 7)); // ms to weeks

      // get the correct color
      const color = this.getColorForcurriculum(batch.curriculum);

      // get the column this batch will be in
      const trainer_index = this.trainers.findIndex(t => t === batch.trainer);

      // todo set width dynamically ?
      const w = 25;

      // get the top left position of the rectangle
      const x = this.swimlane_x_ofs + trainer_index * this.column_width + (this.column_width - w) * 0.5;
      const y = (batch.startDate.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      // calculate height from the top and bottom of the rectangle
      const endy = (batch.endDate.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      const h = endy - y;

      // change label based on height of rectangle
      const labelx = x + w / 4;
      let labely = y + 20;
      const pxhlong = 105;
      const pxhshort = 30;
      const pxhnum = 0;
      let labeltext = '';
      if (h > pxhlong) {
        // spell out weeks
        labeltext = 'WEEKS';
        labely = y + 25;
      } else if (h > pxhshort) {
        // only have number and w
        labeltext = 'W';
        labely = y + 15;
      } else if (h > pxhnum) {
        // only number
        labeltext = '';
        labely = y - 2;
      } else {
        console.log('batch rectangle height is negative!');
        continue;
      }
      // get the text that will be put into the rectangle
      const label = duration
        .toString()
        .split(' ')
        .concat(labeltext.split(''));
      //console.log('batch ' + batch.name + '\n rect: ' + ' x:' + x + ' y:' + y + ' h:' + h);
      // todo batch id
      rects.push({ x: x, y: y, w: w, h: h, id: '', label: label, labelx: labelx, labely: labely, color: color });
    }
    return rects;
  }

  // returns a list of the lines that seperate columns
  getSwimlanes() {
    const lines = [];
    // make 1 more swimlane than the amount of trainers
    for (let i = 0; i < this.trainers.length + 1; i++) {
      const xpos = this.swimlane_x_ofs + i * this.column_width;
      lines.push({ x1: xpos, y1: this.swimlane_y_ofs, x2: xpos, y2: this.height - this.swimlane_y_ofs });
    }
    return lines;
  }

  // returns the list of trainers with their positions
  getTrainers() {
    const trainerposs = [];
    const spacing = 2;
    for (let i = 0; i < this.trainers.length; i++) {
      // get trainer name
      const trainer = this.trainers[i];
      // get left offset of this trainer
      let left = spacing;
      if (i === 0) {
        left += this.swimlane_x_ofs;
      }
      // get width
      const width = this.column_width - spacing;
      trainerposs.push({ name: trainer, left: left, width: width });
    }
    return trainerposs;
  }

  // returns the list of months to display and their position
  getTimescale() {
    // cache some common values
    const full_duration = this.endDate.valueOf() - this.startDate.valueOf();
    const start_month = this.startDate.getMonth();
    const start_year = this.startDate.getFullYear();

    // get distance between months (px) to determine which scale to use
    const ys0 = (new Date(start_year, start_month).valueOf() - this.startDate.valueOf()) / full_duration * this.height;
    const ys1 =
      (new Date(start_year, start_month + 1).valueOf() - this.startDate.valueOf()) / full_duration * this.height;
    const dist_between_months = ys1 - ys0;
    // console.log(dist_between_months);

    // the maximum number of dates to be shown on the screen
    const max_dates = 40;

    // min value for dist_between_months to be for that scale
    // numbers magically determined from trial and error
    const pxdays = 1900;
    const px2days = 800;
    const pxweeks = 300;
    const pxmonths = 100;
    const pxquarters = 30;
    const pxyears = 6;
    const px2years = 2;
    const px5years = 1;
    const px10years = 0;

    // create an array of all the dates to be shown and determine the naming style
    const dates: Date[] = [];
    let namestyle = 'month';
    // dates.push(this.startDate);
    // dates.push(this.endDate);
    if (dist_between_months > pxdays) {
      // show in days
      namestyle = 'day';
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year, start_month, this.startDate.getDate() + i));
      }
      // console.log('day');
    } else if (dist_between_months > px2days) {
      // show in 2 days
      namestyle = 'day';
      const aligned_start_date_2 = this.startDate.getDate() - this.startDate.getDate() % 2;
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year, start_month, aligned_start_date_2 + i * 2));
      }
      // console.log('2day');
    } else if (dist_between_months > pxweeks) {
      // show in weeks
      namestyle = 'month';
      // todo always show month day 0 and year month 0
      const aligned_start_date = this.startDate.getDate() - this.startDate.getDate() % 7;
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year, start_month, i * 7));
      }
      // console.log('week');
    } else if (dist_between_months > pxmonths) {
      // show in months
      namestyle = 'month';
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year, start_month + i));
      }
      // console.log('mnth');
    } else if (dist_between_months > pxquarters) {
      // show in quarters
      namestyle = 'month';
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year, i * 3));
      }
      // console.log('qtr');
    } else if (dist_between_months > pxyears) {
      // show in years
      namestyle = 'year';
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(start_year + i, 0));
      }
      // console.log('yr');
    } else if (dist_between_months > px2years) {
      // show in 2 years
      namestyle = 'year';
      const aligned_start_year = start_year - start_year % 2;
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(aligned_start_year + i * 2, 0));
      }
      // console.log('2yr');
    } else if (dist_between_months > px5years) {
      // show in 5 years
      namestyle = 'year';
      const aligned_start_year = start_year - start_year % 5;
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(aligned_start_year + i * 5, 0));
      }
      // console.log('5yr');
    } else if (dist_between_months > px10years) {
      // show in 10 years
      namestyle = 'year';
      const aligned_start_year = start_year - start_year % 10;
      for (let i = 0; i < max_dates; i++) {
        dates.push(new Date(aligned_start_year + i * 10, 0));
      }
      // console.log('10yr');
    } else {
      console.log('getTimescale failed to determine scale');
      return null;
    }

    // used to show names instead of numbers
    const fullMonthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    // go through all the dates that were just created to apply the naming style and calculate the position
    const timescale = [];
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      // apply naming style - day, month, or year
      let name = 'name ' + i;
      switch (namestyle) {
        case 'day':
          if (date.getDate() === 1) {
            name = fullMonthNames[date.getMonth()];
          } else {
            name = dayOfWeekNames[date.getDay()];
            name += ' ' + date.getDate();
          }
          break;
        case 'month':
          if (date.getDate() === 1) {
            name = fullMonthNames[date.getMonth()];
          } else {
            name = shortMonthNames[date.getMonth()];
            name += ' ' + date.getDate();
          }
          break;
        case 'year':
          name = '' + date.getFullYear();
          break;
      }
      // replace jan 0 with the year
      if (date.getMonth() === 0 && date.getDate() === 1) {
        name = '' + date.getFullYear();
      }
      // calculate the position of the text
      const y = this.swimlane_y_ofs + (date.valueOf() - this.startDate.valueOf()) / full_duration * this.height;
      if (y < this.swimlane_y_ofs) {
        continue;
      } else if (y > this.height - this.swimlane_y_ofs) {
        break;
      }
      const x = this.timescale_x_ofs - 5;
      timescale.push({ name: name, x: x, y: y });
    }
    return timescale;
  }

  startZoom(mouseposy) {
    // calculate values needed for zooming from the mousepos
    this.zoomingFrom = mouseposy;
    this.zoomingLine = { x1: this.timescale_x_ofs, x2: this.width, y1: mouseposy, y2: mouseposy };
    // position (px) to date
    this.zoomingFromDate =
      mouseposy / this.height * (this.endDate.valueOf() - this.startDate.valueOf()) + this.startDate.valueOf();
    // get duration before and after zoom line
    // console.log(new Date(this.zoomingFromDate));
    this.preZoomBeforeDuration = this.zoomingFromDate - this.startDate.valueOf();
    this.preZoomAfterDuration = this.endDate.valueOf() - this.zoomingFromDate;
    this.zooming = true;

    // hide tooltip
    this.tooltipActive = false;
  }

  zoomBy(amount) {
    // must be zooming to zoom
    if (!this.zooming) {
      return;
    }
    // scale the durations before and after the zoom line
    const newBeforeDuration = this.preZoomBeforeDuration * amount;
    const newStart = this.zoomingFromDate - newBeforeDuration;
    const newAfterDuration = this.preZoomAfterDuration * amount;
    const newEnd = this.zoomingFromDate + newAfterDuration;
    // console.log(new Date(newStart) + ', ' + new Date(this.endDate));
    if (newStart >= newEnd) {
      console.log('start date is after end date!');
      return;
    }
    // set start and end dates
    this.startDate = new Date(newStart);
    this.endDate = new Date(newEnd);
    this.updateTodayLine();
  }

  finishZoom() {
    // todo undo support?
    this.zooming = false;
  }

  // start zoom at mouse pos on mousedown
  bgmousedown(event) {
    const mousey = event.clientY - this.timelineRootElement.nativeElement.getBoundingClientRect().top;
    this.startZoom(mousey);
  }
  // finish zoom on mouseup
  bgmouseup(event) {
    this.finishZoom();
  }
  // hide popup and update zoom by delta on mouse move
  bgmousemove(event) {
    const my = event.clientY - this.timelineRootElement.nativeElement.getBoundingClientRect().top;
    const mx = event.clientX - this.timelineRootElement.nativeElement.getBoundingClientRect().left;
    if (this.zooming) {
      // stop zooming if mouse is up (happens when mouse is released outside of the timeline and returns)
      if (event.buttons !== 1) {
        this.finishZoom();
      }
      // get the factor to zoom by from the relative mouse position
      const dy = my - this.zoomingFrom;
      let zoomFactor = dy * this.zoomScale;
      zoomFactor = Math.pow(2, zoomFactor);
      // console.log('zf ' + zoomFactor);
      this.zoomBy(zoomFactor);
    }
    this.updateTooltipVisibility();
  }

  // show tooltip at mouse on mouse move on batch
  batchmousemove(event) {
    // console.log(event.target);
    const x = event.clientX - this.timelineRootElement.nativeElement.getBoundingClientRect().left;
    const y = event.clientY - this.timelineRootElement.nativeElement.getBoundingClientRect().top;
    this.updateTooltip(event.target.id, { x: x, y: y });
  }

  // window has been resized, update timeline
  windowResize(event) {
    this.updateSize();
  }
}
