import { Component, OnInit } from '@angular/core';
import {UrlService} from '../services/url.service';
import { OAuthService, AuthConfig, JwksValidationHandler} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private url: UrlService,
		private oauthService: OAuthService) {

    }

  ngOnInit() {
      //window.location.href = this.url.getUrl();
      const authConfig: AuthConfig = {
	  // Url of the Identity Provider
	  loginUrl: 'https://localhost/oauth/authorize',
	    
	  // URL of the SPA to redirect the user to after login
	  redirectUri: 'http://localhost:4200/overview',

	  // The SPAs id. The SPA is registerd with this id at the auth-server
	  clientId: "assignforceFrontend",

	  // set the scope for the permissions the client should request
	  // The first three are defined by OIDC. The 4th is a usecase-specific one
	  scope: 'read',
      }
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
      this.oauthService.initImplicitFlow();
  }

}
