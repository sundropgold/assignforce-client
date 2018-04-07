import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {
  selectedTab = 0;

  tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'settings'];

  constructor(private router: Router, private route: ActivatedRoute, private auth0: AuthService) {}

  userId = -1;

  logout() {
    this.auth0.logout();
  }

  ngOnInit() {
    this.getUser();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.selectedTab = this.tabs.indexOf(event.url.split('/')[1]);
      }
    });
  }

  ngDoCheck() {
    if (this.router.url.split('/')[1] !== this.tabs[this.selectedTab]) {
      console.log(this.tabs[this.selectedTab]);
      this.selectedTab = this.tabs.indexOf(this.router.url.split('/')[1]);
    }
  }

  selectTab(evt) {
    console.log(evt);
    if (evt.tab.textLabel.toLowerCase() === 'profile') {
      this.router.navigate([`/profile/${this.userId}`]);
    } else {
      this.router.navigate([evt.tab.textLabel.toLowerCase()]);
    }
  }

  getUser() {
    if (localStorage.getItem('access_token')) {
      this.auth0.getProfile((error, profile) => {
        if (profile) {
          this.userId = profile.trainerId;
        }
      });
    }
  }
}
