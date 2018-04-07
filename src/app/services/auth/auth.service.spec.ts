import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UrlService } from '../url/url.service';
import { AppRouting } from '../../app.routing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
      imports: [RouterTestingModule, HttpClientTestingModule],
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
