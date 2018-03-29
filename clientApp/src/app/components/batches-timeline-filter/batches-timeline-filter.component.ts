import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-batches-timeline-filter',
  templateUrl: './batches-timeline-filter.component.html',
  styleUrls: ['./batches-timeline-filter.component.css']
})
export class BatchesTimelineFilterComponent implements OnInit {
  constructor() {}

  private startDate: Date;
  private endDate: Date;
  private curriculum: string;
  private focus: string;
  private location: string;
  private building: string;
  private hideConcludedBatches: boolean;
  private hideBatchlessTrainer: boolean;

  private DEFAULT_PRECEEDING_MONTHS = 3;
  private DEFAULT_PROCEEDING_MONTHS = 6;

  @Output() public filterChangeEmitter = new EventEmitter<Event>();

  private curriculumData = ['Any', '.NET', 'Java', 'SDET', 'Custom'];

  private focusData = ['Any', 'Appian', 'Capitol One', 'Big Data'];

  private locationData = ['Revature HQ', 'Tempe', 'New York City'];

  private buildingData = ['Any', '11730 Plaza Drive'];

  loadStartDate() {
    const preceedingDate = new Date();
    preceedingDate.setMonth(preceedingDate.getMonth() - this.DEFAULT_PRECEEDING_MONTHS);
    this.startDate = preceedingDate;
    console.log(this.startDate);
  }

  loadEndDate() {
    const proceedingDate = new Date();
    proceedingDate.setMonth(proceedingDate.getMonth() + this.DEFAULT_PROCEEDING_MONTHS);
    this.endDate = proceedingDate;
    console.log(this.endDate);
  }

  loadCurriculumData() {
    //todo httprequest
  }

  loadFocusData() {
    //todo httprequest
  }

  loadLocationData() {
    //todo httprequest
  }

  loadBuildingData() {
    //todo httprequest
  }

  onFilterChange(evt: Event) {
    this.filterChangeEmitter.emit(evt);
    console.log(evt);
  }

  ngOnInit() {
    this.loadStartDate();
    this.loadEndDate();
  }
}
