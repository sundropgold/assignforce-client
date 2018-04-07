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

  tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'settings', ''];

  constructor(private router: Router, private route: ActivatedRoute, private auth0: AuthService) {}

  logout() {
    this.auth0.logout();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('current url', event.url.split('/'));
        this.selectedTab = this.tabs.indexOf(event.url.split('/')[1]);
      }
    });
  }

  selectTab(evt) {
    console.log(evt);
    this.router.navigate([evt.tab.textLabel.toLowerCase()]);
  }
}
