import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../url/url.service';
import { environment } from '../../../environments/environment';
import Auth0Lock from 'auth0-lock';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  constructor(private router: Router, private urlService: UrlService) {}

  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientId,
    domain: environment.auth0.domain,
    apiAudience: environment.auth0.audience,
    responseType: environment.auth0.responseType,
    redirectUri: environment.auth0.redirectUri,
    scope: environment.auth0.scope
  });

  lock = new Auth0Lock(environment.auth0.clientId, environment.auth0.domain, {
    autoclose: true,
    closable: false,
    auth: {
      redirectUrl: environment.auth0.redirectUri,
      responseType: environment.auth0.responseType,
      audience: environment.auth0.audience,
      params: {
        scope: environment.auth0.scope
      }
    }
  });

  public showLogin(): void {
    //if (this.isAuthenticated()) this.router.navigate([this.urlService.getOverviewUrl()]);
    this.lock.show();
    // this.auth0.authorize();
  }

  public handleAuthentication(): void {
    // this.auth0.parseHash((error, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //     this.router.navigate([this.urlService.getOverviewUrl()]);
    //   } else if (error) {
    //     this.router.navigate([this.urlService.getLoginUrl()]);
    //   }
    // });

    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log(profile);
          this.setSession(authResult);
          this.router.navigate([this.urlService.getOverviewUrl()]);
        } else if (error) {
          //this.router.navigate([this.urlService.getLoginUrl()]);
        }
      });
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

    //Set the scopes to provided scopes || requested scopes || ''
    const scopes = authResult.scope || '';

    const namespace = environment.auth0.namespace;

    const roles = authResult.idTokenPayload[namespace + 'roles'] || '';
    const groups = authResult.idTokenPayload[namespace + 'groups'] || '';

    console.log(authResult);

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
    localStorage.setItem('roles', JSON.stringify(roles));
    localStorage.setItem('groups', JSON.stringify(groups));
  }

  public logout(): void {
    this.lock.logout({
      returnTo: environment.baseUrl
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public userHasRole(expectedRoles: Array<String>): boolean {
    const roles = JSON.parse(localStorage.getItem('roles'));
    const included: boolean = roles.some(role => expectedRoles.includes(role));
    return included;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.lock.getUserInfo(accessToken, (error, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(error, profile);
    });
  }
}
