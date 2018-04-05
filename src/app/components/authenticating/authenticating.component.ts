import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.css']
})
export class AuthenticatingComponent implements OnInit {
  constructor(private auth0: AuthService) {}

  ngOnInit() {
    //this.auth0.handleAuthentication();
  }
}
