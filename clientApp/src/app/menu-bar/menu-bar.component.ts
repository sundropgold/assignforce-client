import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MatTab} from '@angular/material';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {

    selectedTab = 0;

    tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'settings', 'logout'];
    
    constructor(private router: Router,
		private route: ActivatedRoute) {}

    ngOnInit() {
	this.router.events.subscribe(event => {
	    if (event instanceof NavigationEnd ) {
		console.log("current url",event.url.split('/'));
		this.selectedTab = this.tabs.indexOf(event.url.split('/')[1]);
	    }
	});
    }


  selectTab(evt) {
      //localStorage.setItem('active', evt.index);

      this.router.navigate([(this.tabs[evt.index])]);
/*
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
*/
  }

	/*
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

*/
  logout() {
    //has to redirect to login page
  }
}
