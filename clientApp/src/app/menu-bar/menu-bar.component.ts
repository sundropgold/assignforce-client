import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.toOverview();
  }

  selectTab(evt) {
    switch (evt.index) {
      case 0: this.toOverview();
      break;

      case 1: this.toBatches();
      break;

      case 2: this.toLocations();
        break;

      case 3: this.toCurricula();
        break;

      case 4: this.toTrainers();
        break;

      case 5: this.toProfile();
        break;

      case 6: this.toReports();
        break;

      case 7: this.toSettings();
        break;

      case 8: this.logout();
        break;
    }

  }
  toOverview() {
    this.router.navigate([('overview')]);
  }

  toBatches() {
    this.router.navigate([('batches')]);
  }

  toLocations() {
    this.router.navigate([('locations')]);
  }

  toCurricula() {
    this.router.navigate([('curricula')]);
  }

  toTrainers() {
    this.router.navigate([('trainers')]);
  }

  toProfile() {
    this.router.navigate([('profile')]);
  }

  toReports() {
    this.router.navigate([('reports')]);
  }

  toSettings() {
    this.router.navigate([('settings')]);
  }

  logout() {
    //has to redirect to login page
  }
}
