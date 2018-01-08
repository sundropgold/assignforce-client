import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {MatTab, MatTabNav} from '@angular/material';
import {UserInfoService} from '../services/user-info.service';
import {User} from '../domain/user';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuBarComponent implements OnInit {
  admin = '';
  tabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'profile', 'reports', 'logout'];
  adminTabs = ['overview', 'batches', 'locations', 'curricula', 'trainers', 'reports', 'settings', 'logout'];
  user: User;


  constructor(private userInfo: UserInfoService,
              private notificationService: NotificationService,
	      private router: Router) {
  }

  ngOnInit() {
    this.user = this.userInfo.getUser();
  }

  showToast(msg) {
    this.notificationService.openSnackBar(msg);
  }

    logout(link) {
	if(link === 'LOGOUT'){
	    this.userInfo.logout().subscribe(always => {this.router.navigateByUrl('')}, always => {this.router.navigateByUrl('')}, () => {this.router.navigateByUrl('')});
	    localStorage.clear();
	}
      
    }
}
