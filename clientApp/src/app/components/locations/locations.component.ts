import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry } from '@angular/material';
import { Location } from '../../model/Location';
import { Building } from '../../model/Building';
import { Room } from '../../model/Room';
import { LocationAddDialogComponent } from './add-dialog/location-add-dialog.component';

@Component({
  selector: 'app-location-delete-location-dialog',
  templateUrl: './location-delete-location-dialog.component.html'
})
export class LocationDeleteLocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationDeleteLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-add-location-dialog',
  templateUrl: './location-add-location-dialog.component.html'
})
export class LocationAddLocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationAddLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-edit-location-dialog',
  templateUrl: './location-edit-location-dialog.component.html'
})
export class LocationEditLocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationEditLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// @Component({
//   selector: 'app-location-add-building-dialog',
//   templateUrl: './location-add-building-dialog.component.html'
// })
// export class LocationAddBuildingDialogComponent {
//   constructor(
//     public dialogRef: MatDialogRef<LocationAddBuildingDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

@Component({
  selector: 'app-location-delete-building-dialog',
  templateUrl: './location-delete-building-dialog.component.html'
})
export class LocationDeleteBuildingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationDeleteBuildingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-edit-building-dialog',
  templateUrl: './location-edit-building-dialog.component.html'
})
export class LocationEditBuildingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationEditBuildingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-add-room-dialog',
  templateUrl: './location-add-room-dialog.component.html'
})
export class LocationAddRoomDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationAddRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-delete-room-dialog',
  templateUrl: './location-delete-room-dialog.component.html'
})
export class LocationDeleteRoomDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationDeleteRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-location-edit-room-dialog',
  templateUrl: './location-edit-room-dialog.component.html'
})
export class LocationEditRoomDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationEditRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationsComponent implements OnInit {
  expanded: boolean[] = [];
  locations = [
    {
      id: '13F',
      name: 'Revature HQ',
      city: 'Reaston',
      state: 'VA',
      buildings: [
        {
          name: 'Building 1',
          rooms: [
            {
              name: 'Room 101'
            },
            {
              name: 'Room 102'
            }
          ]
        },
        {
          name: 'Building 2',
          rooms: [
            {
              name: 'Room 201'
            },
            {
              name: 'Room 202'
            }
          ]
        }
      ]
    },
    {
      id: '13E',
      name: 'CUNY',
      city: 'New York',
      state: 'NY',
      buildings: [
        {
          name: 'SPS',
          rooms: [
            {
              name: 'Room 216'
            },
            {
              name: 'Room 220'
            }
          ]
        },
        {
          name: 'Queens College',
          rooms: [
            {
              name: 'Room 301'
            },
            {
              name: 'Room 302'
            }
          ]
        }
      ]
    }
  ];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, public dialog: MatDialog) {
    for (const location of this.locations) {
      this.expanded[location.id] = false;
    }

    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_location_city_black_48px.svg')
    );
    iconRegistry.addSvgIcon(
      'building',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg')
    );
    iconRegistry.addSvgIcon('room', sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg'));
  }
  ngOnInit() {}
  collapseAll(id: any) {
    this.expanded[id] = !this.expanded[id];

    for (const location of this.locations) {
      if (location.id !== id) {
        this.expanded[location.id] = false;
      }
    }
  }
  addLocation(location: Location) {
    // call service
  }
  updateLocation(location: Location) {
    // call service
  }
  deleteLocation(location: Location) {
    // call service
  }
  openAddLocationDialog(evt): void {
    evt.stopPropagation();
    const location = {
      id: '',
      name: '',
      city: '',
      state: '',
      buildings: []
    };
    const dialogRef = this.dialog.open(LocationAddDialogComponent, {
      width: '450px',
      data: {
        addType: 'location',
        location: location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addLocation(result);
      }
    });
  }
  openDeleteLocationDialog(evt, location: Location): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationDeleteLocationDialogComponent, {
      width: '250px',
      data: {
        location: location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteLocation(result);
      }
    });
  }
  openEditLocationDialog(evt, location: Location): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationEditLocationDialogComponent, {
      width: '450px',
      data: {
        location: location
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateLocation(result);
      }
    });
  }
  openAddBuildingDialog(evt, location: Location): void {
    evt.stopPropagation();
    const building = {
      name: '',
      rooms: []
    };
    // const dialogRef = this.dialog.open(LocationAddBuildingDialogComponent, {
    const dialogRef = this.dialog.open(LocationAddDialogComponent, {
      width: '450px',
      data: {
        addType: 'building',
        building: building
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        location.buildings.push(result);
        this.updateLocation(location);
      }
    });
  }
  openDeleteBuildingDialog(evt, location: Location, building: Building): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationDeleteBuildingDialogComponent, {
      width: '250px',
      data: {
        building: building
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        location.buildings = location.buildings.filter(e => e !== result);
        this.updateLocation(location);
      }
    });
  }
  openEditBuildingDialog(evt, location: Location, building: Building): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationEditBuildingDialogComponent, {
      width: '450px',
      data: {
        building: building
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateLocation(location);
      }
    });
  }
  openAddRoomDialog(evt, location: Location, building: Building): void {
    evt.stopPropagation();
    const room = {
      roomName: ''
    };
    const dialogRef = this.dialog.open(LocationAddDialogComponent, {
      width: '450px',
      data: {
        addType: 'room',
        room: room
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        building.rooms.push(result);
        this.updateLocation(location);
      }
    });
  }
  openDeleteRoomDialog(evt, location: Location, building: Building, room: Room): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationDeleteRoomDialogComponent, {
      width: '250px',
      data: {
        room: room
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        building.rooms = building.rooms.filter(e => e !== result);
        this.updateLocation(location);
      }
    });
  }
  openEditRoomDialog(evt, location: Location, room: Room): void {
    evt.stopPropagation();
    const dialogRef = this.dialog.open(LocationEditRoomDialogComponent, {
      width: '450px',
      data: {
        room: room
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateLocation(location);
      }
    });
  }
}
