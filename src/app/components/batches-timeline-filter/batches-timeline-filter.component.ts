import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-batches-timeline-filter',
  templateUrl: './batches-timeline-filter.component.html',
  styleUrls: ['./batches-timeline-filter.component.css']
})
export class BatchesTimelineFilterComponent implements OnInit {
  constructor() {}

  public startDate: Date;
  public endDate: Date;
  public curriculum: string;
  public focus: string;
  public location: string;
  public building: string;
  public hideConcludedBatches: boolean;
  public hideBatchlessTrainer: boolean;

  private DEFAULT_PRECEEDING_MONTHS = 3;
  private DEFAULT_PROCEEDING_MONTHS = 6;

  @Output() public filterChangeEmitter = new EventEmitter<Event>();

  public curriculumData = ['Any', '.NET', 'Java', 'SDET', 'Custom'];

  public focusData = ['Any', 'Appian', 'Capitol One', 'Big Data'];

  public locationData = ['Revature HQ', 'Tempe', 'New York City'];

  public buildingData = ['Any', '11730 Plaza Drive'];

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
    //todo CurriculumControllerService getall
  }

  loadFocusData() {
    //todo
  }

  loadLocationData() {
    //todo
  }

  loadBuildingData() {
    //todo
  }

  onFilterChange(evt: Event) {
    this.filterChangeEmitter.emit(evt);
  }

  ngOnInit() {
    this.loadStartDate();
    this.loadEndDate();
  }
}
