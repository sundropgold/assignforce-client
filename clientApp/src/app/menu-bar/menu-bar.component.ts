import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MatTab, MatTabNav} from '@angular/material';
import {UserInfoService} from '../services/user-info.service';
import {User} from '../domain/user';
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {
  admin: any;
  tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'settings', 'logout'];
  adminTabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'reports', 'settings', 'logout'];
  user: User;


  constructor(private userinfo: UserInfoService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.userinfo.loadUser().subscribe((user) => {
      this.user = user;
      this.admin = this.user.role;
      console.log(this.user);
    }, (error) => {
      this.showToast('Failed to fetch user info.');
    });
  }

  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

  logout() {
    //has to redirect to login page
  }
}
