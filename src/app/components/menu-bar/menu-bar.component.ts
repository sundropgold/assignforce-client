import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
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

  id = 'undefined';
  loaded = false;

  check = true;

  constructor(private router: Router, private route: ActivatedRoute, private auth0: AuthService) {}

  logout() {
    this.auth0.logout();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedTab = this.tabs.indexOf(event.url.split('/')[1]);
        if (this.router.url.includes('profile')) {
          this.id = this.router.url.split('/')[2];
        }
      }
    });
  }

  ngDoCheck() {
    if (!this.loaded && localStorage.getItem('user-email')) {
      this.loaded = true;
    }
  }

  selectTab(evt) {
    console.log(evt);
    if (this.id === 'undefined') {
      if (localStorage.getItem('user-email')) {
        this.id = localStorage.getItem('user-email');
      }
    }
    if (this.loaded) {
      if (this.selectedTab === this.tabs.indexOf('profile')) {
        this.router.navigate([`/profile/${this.id}`]);
      } else {
        this.router.navigate([this.tabs[evt.index]]);
      }
    }
  }
}
