import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { LocationControllerService } from '../../services/api/location-controller/location-controller.service';

@Component({
  selector: 'app-batches-timeline-filter',
  templateUrl: './batches-timeline-filter.component.html',
  styleUrls: ['./batches-timeline-filter.component.css']
})
export class BatchesTimelineFilterComponent implements OnInit {
  constructor(
    private curriculumControllerService: CurriculumControllerService,
    private locationControllerService: LocationControllerService
  ) { }

  @Input() loading = false;

  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() curriculumFilter = 'Any';
  @Input() focusFilter = 'Any';
  @Input() locationFilter = 'Any';
  @Input() buildingFilter = 'Any';
  @Input() hideConcludedBatches: boolean;
  @Input() hideBatchlessTrainers: boolean;
  @Input() hideInactiveTrainers: boolean;
  @Input() trainersPerPage: number;
  @Input() currentPage: number;
  @Input() maxPages: number;

  @Output() public filterChangeEmitter = new EventEmitter<Event>();

  private curriculumData = ['Any', '.NET', 'Java', 'SDET', 'Custom'];

  private focusData = ['Any', 'Appian', 'Capitol One', 'Big Data'];

  private locationData = ['Revature HQ', 'Tempe', 'New York City'];

  private buildingData = ['Any', '11730 Plaza Drive'];

  ngOnInit() {
    this.loadCurriculumData();
    this.loadFocusData();
    this.loadLocationData();
    this.loadBuildingData();
  }

  loadCurriculumData() {
    this.loading = true;
    this.curriculumControllerService.retrieveAllCore().subscribe(result => {
      this.curriculumData = [];
      this.curriculumData.push('Any');
      for (let i = 0; i < result.length; i++) {
        const curriculum = result[i];
        const value = curriculum.name;
        if (value != null) {
          this.curriculumData.push(value);
        }
      }
      this.curriculumFilter = 'Any';
      this.loading = false;
    });
  }

  loadFocusData() {
    this.loading = true;
    this.curriculumControllerService.retrieveAllFocus().subscribe(result => {
      this.focusData = [];
      this.focusData.push('Any');
      for (let i = 0; i < result.length; i++) {
        const focus = result[i];
        const value = focus.name;
        if (value != null) {
          this.focusData.push(value);
        }
      }
      this.focusFilter = 'Any';
      this.loading = false;
    });
  }

  loadLocationData() {
    this.loading = true;
    this.locationControllerService.retrieveAllLocation().subscribe(result => {
      this.locationData = [];
      this.locationData.push('Any');
      for (let i = 0; i < result.length; i++) {
        const location = result[i];
        console.log('got location:' + location.id + ' ' + location.locationId + ' ' + location.locationName + ' ' + location.buildingId + ' ' + location.buildingName);
        const value = location.locationName;
        if (value != null) {
          this.locationData.push(value);
        }
      }
      this.locationFilter = 'Any';
      this.loading = false;
    });
  }

  loadBuildingData() {
    this.loading = true;
    this.locationControllerService.retrieveAllLocation().subscribe(result => {
      this.buildingData = [];
      this.buildingData.push('Any');
      for (let i = 0; i < result.length; i++) {
        const location = result[i];
        const value = location.buildingName;
        if (value != null) {
          this.buildingData.push(value);
        }
      }
      this.buildingFilter = 'Any';
      this.loading = false;
    });
  }

  onFilterChange(evt: Event) {
    this.filterChangeEmitter.emit(evt);
  }
}
