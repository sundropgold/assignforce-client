import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UrlService } from '../url/url.service';
import { AppRouting } from '../../app.routing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

export class MockAuthService {
  lock = null;
  showLogin() {
    return;
  }
  handleAuthentication() {
    return;
  }
}

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        UrlService,
        { provide: Router, useClass: AppRouting }
      ]
    }).compileComponents();
  });

  it(
    'should be created',
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy();
    })
  );
});
