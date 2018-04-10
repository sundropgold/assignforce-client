import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { RoomControllerService } from '../../services/api/room-controller/room-controller.service';
import { BuildingControllerService } from '../../services/api/building-controller/building-controller.service';

@Component({
  selector: 'app-batches-timeline-filter',
  templateUrl: './batches-timeline-filter.component.html',
  styleUrls: ['./batches-timeline-filter.component.css']
})
export class BatchesTimelineFilterComponent implements OnInit {
  constructor(
    private curriculumControllerService: CurriculumControllerService,
    private focusControllerService: FocusControllerService,
    private addressControllerService: AddressControllerService,
    private roomControllerService: RoomControllerService,
    private buildingControllerService: BuildingControllerService
  ) {}

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
  @Input() trainersPerPage: 0;
  @Input() currentPage: 0;
  @Input() maxPages: 0;

  @Output() public filterChangeEmitter = new EventEmitter<Event>();

  public curriculumData = [];
  public focusData = [];
  public locationData = [];
  public buildingData = [];

  ngOnInit() {
    this.loadCurriculumData();
    this.loadFocusData();
    this.loadLocationData();
    this.loadBuildingData();
  }

  loadCurriculumData() {
    this.loading = true;
    this.curriculumControllerService.findAll().subscribe(
      result => {
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
      },
      err => {
        console.log('failed to load curriculums ', err);
      }
    );
  }

  loadFocusData() {
    this.loading = true;
    this.focusControllerService.findAll().subscribe(
      result => {
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
      },
      err => {
        console.log('failed to load focuses ', err);
      }
    );
  }

  loadLocationData() {
    this.loading = true;
    this.addressControllerService.findAll().subscribe(
      result => {
        this.locationData = [];
        this.locationData.push('Any');
        for (let i = 0; i < result.length; i++) {
          const location = result[i];
          const value = location.name;
          if (value != null) {
            this.locationData.push(value);
          }
        }
        this.locationFilter = 'Any';
        this.loading = false;
      },
      err => {
        console.log('failed to load locations ', err);
      }
    );
  }

  loadBuildingData() {
    this.loading = true;
    this.buildingControllerService.findAll().subscribe(
      result => {
        this.buildingData = [];
        this.buildingData.push('Any');
        for (let i = 0; i < result.length; i++) {
          const location = result[i];
          for (let j = 0; j < result.length; j++) {
            const building = result[j];
            const value = building.name;
            if (value != null) {
              this.buildingData.push(value);
            }
          }
        }
        this.buildingFilter = 'Any';
        this.loading = false;
      },
      err => {
        console.log('failed to load buildings ', err);
      }
    );
  }

  onFilterChange(evt: Event) {
    this.filterChangeEmitter.emit(evt);
  }
}
