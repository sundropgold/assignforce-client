import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MatTab, MatTabNav} from '@angular/material';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {
  admin = false;
  tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'settings', 'logout'];
  adminTabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'reports', 'settings', 'logout'];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  logout() {
    //has to redirect to login page
  }
}
