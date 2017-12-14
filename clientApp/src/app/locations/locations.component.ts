import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    for (let location of this.locations) {
      this.expanded[location.id] = false;
    }

    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_location_city_black_48px.svg'));
    iconRegistry.addSvgIcon(
      'building',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg'));
    iconRegistry.addSvgIcon(
      'room',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_business_black_48px.svg'));
  }
  ngOnInit() {
  }
  collapseAll(id: any) {
    this.expanded[id] = !this.expanded[id];

    for (let location of this.locations) {
      if (location.id !== id) {
        this.expanded[location.id] = false;
      }
    }
  }

  logInfo() {
    // console.log(this.expanded);
  }
  test(evt) {
    console.log('test');
    evt.stopPropagation();
  }
}
