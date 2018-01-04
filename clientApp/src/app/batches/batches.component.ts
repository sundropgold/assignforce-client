import {AfterViewInit, Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatSort, MatTableDataSource, MatCheckbox, MatPaginator, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Batch, BatchLocation, BatchStatus} from '../domain/batch';
import {FormControl} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {BatchService} from '../services/batch.service';
import {NotificationService} from '../services/notification.service';
import {CurriculaService} from '../services/curricula.service';
import {TrainerService} from '../services/trainer.service';
import {DatePipe} from '@angular/common';
import {Curriculum} from '../domain/curriculum';
import {Trainer} from '../domain/trainer';
import {SkillService} from '../services/skill.service';
import {Skill} from '../domain/skill';
import {BuildingService} from '../services/building.service';
import {LocationService} from '../services/location.service';
import {RoomService} from '../services/room.service';
import {Building} from '../domain/building';
import {Room} from '../domain/room';
import {Locations} from '../domain/locations';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BatchesComponent implements OnInit, AfterViewInit {


  curDate: any;
  datebetween: any;

  // This boolean changes the buttons in the first tab between cancel/finalize and create
  // true = create
  // false = cancel/finalize
  creating = true;

  // This is the batch that is being created or edited
  batch: Batch;
   monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  curriculumForm: Curriculum[];

  skills = new FormControl();

  skillForm: Skill[];

  trainerForm: Trainer[];

  locationForm: Locations[];

  buildingForm: Building[];
  test: Building[];
  roomForm: Room[];

  // This boolean checks if it is editing
  isEditing = false;

  // This is the id of the batch beign edited
  editBatchId = null;

  // This is the dialog box for the finalize button;
  finalize = 'finalize creation';

  firstTabHeader = 'Create New Batch';

  //  VALUES FOR THE ALL BATCHES TAB
  // These are the column names for the mat table to make it work
  // Make sure they are the same variable name as the values in the batch.ts
  batchValues = ['Checkbox', 'name', 'curriculumName', 'focusName', 'trainerName',
    'location', 'building', 'room', 'startDate', 'endDate', 'Icons'];

  // Batch data pulled from the database
  BatchData: Batch[];
  batchData = new MatTableDataSource(this.BatchData);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private batchService: BatchService,
              private curriculaService: CurriculaService,
              private trainerService: TrainerService,
              private skillService: SkillService,
              private locationService: LocationService,
              private buildingService: BuildingService,
              private roomService: RoomService,
              public dialog: MatDialog,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAll();
    this.initBatch();
  }

  ngAfterViewInit() {
    this.batchData.sort = this.sort;
    this.batchData.paginator = this.paginator;
    this.batchData = new MatTableDataSource(this.BatchData);
  }

  EditBatch(id: number) {
    this.firstTabHeader = 'Editing Batch';
    this.CloneBatch(id);
    this.creating = false;
    this.isEditing = true;
    this.finalize = 'finalize edit';
    this.editBatchId = id;
  }

  CloneBatch(id: number) {
    this.batchService.getById(id).subscribe(data => {
      this.batch = data;
      this.getBuildings();
      this.getRooms();
    });
  }

  DeleteBatch(id: number) {
    const dialogRef = this.dialog.open(BatchDeleteDialogComponent,
      {
        width: '400px',
        data: id
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('delete batch dialog closed');
      this.getAll();
    });
  }

  SynchronizeBatch() {
  }

  isAuthorized() {
    return false;
    // get user priviledge and return true if admin , else return false. Result determines if batch creation is available.
  }
  isCreating() {
    return this.creating;
  }

  // This opens up the two buttons that say cancel and finalize
  beginCreation(evt) {
    this.firstTabHeader = 'Create New Batch';
    this.creating = !this.creating;
    this.showToast('Creating new Batch');
    evt.stopPropagation();
  }

  // cancels a creation
  cancel(evt) {
    this.firstTabHeader = 'Create New Batch';
    this.creating = !this.creating;
    evt.stopPropagation();
    this.isEditing = false;
    this.finalize = 'finalize creation';
    this.editBatchId = null;
    this.batch.id = this.editBatchId;
  }

  // finalzies creation
  create(evt) {
    // createBatch(). send form with data to micro service for batch creation.
    this.creating = !this.creating;
    console.log(this.batch);
    if (this.isEditing === false) {
      this.batchService.create(this.batch).subscribe(data => {
        this.getAll();
        this.editBatchId = null;
        this.batch.id = this.editBatchId;
        this.reload(evt);
      });
    } else {
      this.batchService.update(this.batch).subscribe(data => {
        this.reload(evt);
      });
    }
    this.cancel(evt);
    evt.stopPropagation();
  }

  reload(evt) {
    this.getAll();
    this.cancel(evt);
  }

  calcDate(evt) {
    this.curDate = new Date();
    this.datebetween = ((this.batch.endDate)as any - ((this.batch.startDate)as any)) / 1000 / 60 / 60 / 24;
    this.batch.name = this.curDate.getYear() % 100 + '' + (this.batch.startDate.getMonth() + 1) + '' + this.monthNames
      [this.batch.startDate.getMonth()] + '' + (this.batch.startDate.getUTCDate()) + '' + this.batch.curriculum;
    console.log(this.batch.name);
  }
  setCur(evt) {
    this.batch.curriculum = evt;
    this.batch.curriculumName = evt.viewValue;
    console.log(this.batch);

  }
  initBatch() {
    this.batch = {
      name: '' ,
      startDate: new Date(),
      endDate: new Date(),
      curriculum: 1,
      focus: 1,
      trainer: 1,
      cotrainer: 1,
      batchStatus: {
        batchStatusID: 1,
        batchStatusName: 'Scheduled'
      },
      batchLocation: {
        buildingId: null,
        buildingName: null,
        roomId: null,
        roomName: null,
        locationId: null,
        locationName: null
      },
      skills: [],
      id: null,
      // Data that is not in the backend
      progress: 1,
      curriculumName: '',
      focusName: '',
      trainerName: '',
      cotrainerName: ''
    };
  }

  // error messages
  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  // Gets all batches and stores them in variable batchData
  // Should also get all trainers and curricula and store them
  getAll() {
    this.batchService.getAll().subscribe(data => {
      this.BatchData = data;
      for (const entry of this.BatchData) {
        this.curriculaService.getById(entry.curriculum)
          .subscribe(curriculumData => {
            entry.curriculumName = curriculumData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.curriculaService.getById(entry.focus)
          .subscribe(focusData => {
            entry.focusName = focusData.name;
          }, error => {
            this.showToast('Failed to fetch Curricula');
          });
        this.trainerService.getById(entry.trainer)
          .subscribe(trainerData => {
            entry.trainerName = trainerData.firstName + ' ' + trainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });
        this.trainerService.getById(entry.cotrainer)
          .subscribe(cotrainerData => {
            entry.cotrainerName = cotrainerData.firstName + ' ' + cotrainerData.lastName;
          }, error => {
            this.showToast('Failed to fetch Trainers');
          });

        this.locationService.getById(entry.batchLocation.locationId)
          .subscribe(locationData => {
            entry.batchLocation.locationId = locationData.id;
            entry.batchLocation.locationName = locationData.name;
          }, error => {
            this.showToast('Failed to fetch Locations');
          });

        this.buildingService.getById(entry.batchLocation.buildingId)
          .subscribe(buildingData => {
            entry.batchLocation.buildingId = buildingData.id;
            entry.batchLocation.buildingName = buildingData.name;
          }, error => {
            this.showToast('Failed to fetch Buildings');
          });

        this.roomService.getById(entry.batchLocation.roomId)
          .subscribe(roomData => {
            entry.batchLocation.roomId = roomData.roomID;
            entry.batchLocation.roomName = roomData.roomName;
          }, error => {
            this.showToast('Failed to fetch Rooms');
          });
      }
      this.batchData = new MatTableDataSource(this.BatchData);
      this.batchData.sort = this.sort;
      this.batchData.paginator = this.paginator;
  }, error => {
      this.showToast('Failed to fetch Batches');
    });

    this.trainerService.getAll().subscribe(trainerData => {
      this.trainerForm = trainerData;
    }, error => {
      this.showToast('Failed to fetch Batches');
    });

    this.curriculaService.getAll().subscribe(curriculaData => {
      this.curriculumForm = curriculaData;
    }, error => {
      this.showToast('Failed to fetch Curricula');
    });

    this.skillService.getAll().subscribe(skillData => {
      this.skillForm = skillData;
    }, error => {
      this.showToast('Failed to fetch Skill');
    });

    this.locationService.getAll().subscribe(locationData => {
      this.locationForm = locationData;
    }, error => {
      this.showToast('Failed to fetch Locations');
    });
  }

  // Gets the buildings of the clicked room
  getBuildings() {
    this.locationService.getById(this.batch.batchLocation.locationId).subscribe(buildingData => {
      this.buildingForm = buildingData.buildings;
    }, error => {
      this.showToast('Failed to fetch Buildings');
    });
  }
  // Gets the rooms of the clicked buildings
  getRooms() {
    this.buildingService.getById(this.batch.batchLocation.buildingId).subscribe(roomData => {
      this.roomForm = roomData.rooms;
    }, error => {
      this.showToast('Failed to fetch Rooms');
    });
  }
  getCurriculumSkills () {
    this.curriculaService.getById(this.batch.curriculum).subscribe(data => {
      this.batch.skills = data.skills;
    });
  }
  getFocusSkills() {
    this.curriculaService.getById(this.batch.focus).subscribe(data => {
      console.log(data);
      this.batch.skills = this.batch.skills.concat(data.skills);
      console.log(this.batch.skills);
    });
  }

}



/*************************   Batch Delete Dialog **********************************/
@Component({
  selector: 'app-batch-delete-dialog',
  templateUrl: 'batch-delete-dialog.component.html',
  styleUrls: ['./batches.component.css']
})

export class BatchDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BatchDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private batchService: BatchService
  ) {}

  deleteBatch() {
    console.log(this.data);
    this.batchService.delete(this.data).subscribe(batchDeleteData => {

    });
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

