import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {Locations} from '../domain/locations';
import {NotificationService} from '../services/notification.service';
import {Building} from '../domain/building';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  selectedLocation = 'None';
  selectedBuilding = 'None';
  location: Locations [];
  building: Building [];

  constructor(private locationService: LocationService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.locationService.getAll().subscribe((list) => {
      this.location = list;
    }, (err) => {
      this.showToast('Failed to fetch Locations');
    });
  }

  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  choosingLocation(location) {
    this.building = location.buildings;
    console.log(this.building);
  }

  update() {}


  cancel() {}
}
