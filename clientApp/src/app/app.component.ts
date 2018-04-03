import { Component, OnInit } from '@angular/core';
import { SecurityContext } from './services/auth/security-context.service';
import { SecurityConfig } from './services/auth/security-config';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userIsAuthenticated = false;

  constructor(private securityContext: SecurityContext) {
    const securityConfig = new SecurityConfig();
    securityConfig.roles = environment.security_config.roles;
    securityConfig.permissions = environment.security_config.permissions;
    securityConfig.groups = environment.security_config.groups;

    this.securityContext.setSecurityConfig(securityConfig);
  }

  ngOnInit() {}
}
