import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort, MatTableDataSource, MatCheckbox, MatSelect } from '@angular/material';
import { Batch } from '../../model/Batch';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {
  // FAKE VALUES FOR THE FIRST TAB
  datebetween = 0;

  Curriculums = [
    { value: 'java-0', viewValue: 'JAVA' },
    { value: 'c++-1', viewValue: 'C++' },
    { value: 'angular-2', viewValue: 'ANGULAR 4' }
  ];

  focuses = [
    { value: 'microservices-0', viewValue: 'Microservices' },
    { value: 'focus2-1', viewValue: 'Focus 2' },
    { value: 'focus3-2', viewValue: 'Focus 3' }
  ];

  skills = new FormControl();

  skillsList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

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
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg')
    );
  }

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
  // batchData = new MatTableDataSource(BatchData);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {}

  ngAfterViewInit() {
    // this.batchData.sort = this.sort;
  }

  EditBatch() {
    this.firstTabHeader = 'Edit Batch';
  }

  CloneBatch() {
    this.firstTabHeader = 'Clone Batch';
  }

  DeleteBatch() {}

  SynchronizeBatch() {}
}
