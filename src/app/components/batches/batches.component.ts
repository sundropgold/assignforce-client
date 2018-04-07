import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatTableDataSource, MatCheckbox, MatSelect } from '@angular/material';
import { Batch } from '../../model/Batch';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Curriculum } from '../../model/Curriculum';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {
  //--------------------------------------------------Temporary---------------------------------------------------
  skillsList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  curriculums = [
    { value: 'Java', viewValue: 'JAVA' },
    { value: 'c++-1', viewValue: 'C++' },
    { value: 'angular-2', viewValue: 'ANGULAR 4' }
  ];

  focuses = [
    { value: 'microservices-0', viewValue: 'Microservices' },
    { value: 'focus2-1', viewValue: 'Focus 2' },
    { value: 'focus3-2', viewValue: 'Focus 3' }
  ];
  trainers = [
    { value: 'trainer-0', viewValue: 'August Duet' },
    { value: 'trainer-1', viewValue: 'Emily Higgins' },
    { value: 'trainer-2', viewValue: 'Steven Kelsey' }
  ];

  // locations = [
  //   {value: 'location-0', viewValue: 'Revature HQ - Reston,VA'},
  //   {value: 'location-1', viewValue: 'CUNY - SPS,NY'}
  // ];

  locations: any[] = [
    {
      location: 'Reston HQ - Reston, VA',
      building: [
        {
          name: 'Douglas  Pace',
          rooms: [{ name: '101' }]
        },
        {
          name: 'Mcleod  Mueller'
        }
      ]
    },
    {
      location: 'CUNY - New York, NY',
      building: [
        {
          name: 'SPS'
        },
        {
          name: 'QUEENS COLLEGE'
        }
      ]
    }
  ];

  buildings = [
    { value: 'building-0', viewValue: 'Reston' },
    { value: 'trainer-1', viewValue: 'CSPS' },
    { value: 'trainer-2', viewValue: 'Steven Kelsey' }
  ];
  rooms = [{ value: 'room-0', viewValue: '201' }, { value: 'room-1', viewValue: '301' }];

  //--------------------------------------------------VALUES FOR CREATE BATCHES----------------------------------------

  batchForm: FormGroup;

  // //Object for storing batch form data
  // batchObj: Batch;

  // //Look up data for the form fields
  // curriculums: Curriculum;
  // locations: Location;

  //number of weeks between two of the selected dates
  numOfWeeksBetween = 0;
  //generated batch name based on the selected Curriculum/Focus and start date
  genBatchName = '';

  firstTabHeader = 'Create New Batch';

  //  VALUES FOR THE ALL BATCHES TAB
  batchValues = [
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
  batchData = new MatTableDataSource([]);
  // batchData = new MatTableDataSource(BatchData);

  //default for current date
  currentDate: Date = new Date();

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'thumbs-up',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg')
  //   );
  // }
  constructor(private fb: FormBuilder) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
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

    this.batchForm.valueChanges.subscribe(data => {
      const startDate = data.startDate;
      const endDate = data.endDate;
      const curriculum = data.curriculum;
      this.numOfWeeksBetween = this.computeNumOfWeeksBetween(startDate, endDate);
      this.genBatchName = this.createBatchName(curriculum, startDate);
    });
  }

  ngAfterViewInit() {
    // this.batchData.sort = this.sort;
  }

  //initialize form group
  createBatch() {
    this.firstTabHeader = 'Create New Batch';
  }

  editBatch() {
    // this.firstTabHeader = 'Edit Batch';
  }

  cloneBatch() {
    // this.firstTabHeader = 'Clone Batch';
  }

  deleteBatch() {}

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
      // const numberOfWeeks = numberOfDays/7;

      return numberOfWeeks;
    }
    return 0;
  }

  //Generate Batch Name
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

  // SynchronizeBatch() {}
}
