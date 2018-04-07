import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatTableDataSource, MatCheckbox, MatSelect } from '@angular/material';
import { Batch } from '../../model/Batch';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Curriculum } from '../../model/Curriculum';
import { FormControl } from '@angular/forms';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {
  //--------------------------------------------------VALUES FOR CREATE BATCHES-------------------------------------
  //Object for storing batch form data
  batchForm: FormGroup;
  newBatch: Batch;

  //For form select in Create New Batch
  curriculums: Curriculum[];
  locations: Location[];

  // Create Batch Form Data
  numOfWeeksBetween = 0;
  genBatchName = '';

  // ------------------------------------------------ VARIABLES FOR ALL BATCHES -----------------------------------
  //  COLUMNS FOR THE ALL BATCHES TAB
  batchColumns = [
    'Checkbox',
    'Name',
    'Curriculum',
    'Focus',
    'Trainer/Co-Trainer',
    'Location',
    'Building',
    'Room',
    'StartDate',
    'EndDate',
    'Icons'
  ];

  allBatches: Batch[];
  dataSource = new MatTableDataSource(this.allBatches);

  // ----------------------------------------------- END OF VARIABLES -------------------------------------------
  constructor(private fb: FormBuilder) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    // --------- Create Batch Validation --------------
    this.batchForm = this.fb.group({
      curriculum: [null, Validators.required],
      focus: [null],
      skills: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      batchName: [null],
      trainer: [null, Validators.required],
      cotrainer: [null, Validators.required],
      location: [null, Validators.required],
      building: [null, Validators.required],
      room: [null, Validators.required]
    });

    // ----- Observable for form changes in Create Batches ------
    this.batchForm.valueChanges.subscribe(data => {
      const startDate = data.startDate;
      const endDate = data.endDate;
      const curriculum = data.curriculum;
      this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, endDate);
      this.genBatchName = this.createBatchName(curriculum, startDate);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //Insert a new batch using provided form data
  onSubmit(form: NgForm) {
    //for testing
    console.log(form);
  }

  //Calculate number of weeks between two dates
  computeNumOfWeeksBetween(startDate: number, endDate: number): number {
    if (startDate && endDate) {
      const numberOfDays = Math.abs(<any>startDate - <any>endDate) / (1000 * 60 * 60 * 24);
      const numberOfWeeks = Math.floor(numberOfDays / 7);
      return numberOfWeeks;
    }
    return 0;
  }

  //Generate Batch Name based on curriculum and start date
  createBatchName(curriculum: string, startDate: number): string {
    if (curriculum && startDate) {
      const date = new Date(startDate);
      const year = date
        .getFullYear()
        .toString()
        .substr(-2);
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();
      const monthName = date.toLocaleString('en-us', { month: 'short' });

      if (date.getDate() < 10) {
        day = '0' + day;
      }
      if (date.getMonth() < 10) {
        month = '0' + month;
      }
      return year + '' + month + ' ' + monthName + '' + day + ' ' + curriculum;
    }
    return '';
  }
}
