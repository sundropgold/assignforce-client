import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url/url.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth0: AuthService) {}

  ngOnInit() {
    this.auth0.showLogin();
  }
}
