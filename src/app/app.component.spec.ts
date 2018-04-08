import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRouting } from './app.routing';
import { AuthService } from './services/auth/auth.service';
import { UrlService } from './services/url/url.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SecurityContext } from './services/auth/security-context.service';

export class MockActivatedRoute {
  private paramsSubject = new BehaviorSubject(this.testParams);
  private _testParams: {};

  params = this.paramsSubject.asObservable();

  get testParams() {
    return this._testParams;
  }
  set testParams(newParams: any) {
    this._testParams = newParams;
    this.paramsSubject.next(newParams);
  }
}

describe('AppComponent', () => {
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }
  const activeRoute = new MockActivatedRoute();
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, ReactiveFormsModule, RouterTestingModule.withRoutes([]), BrowserAnimationsModule],
        declarations: [AppComponent, MenuBarComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: ActivatedRoute, useValue: activeRoute },
          { provide: Router, useClass: AppRouting },
          AuthService,
          SecurityContext,
          UrlService
        ]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
