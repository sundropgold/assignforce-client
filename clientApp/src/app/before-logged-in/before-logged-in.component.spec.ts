import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoggedInComponent } from './before-logged-in.component';

describe('BeforeLoggedInComponent', () => {
  let component: BeforeLoggedInComponent;
  let fixture: ComponentFixture<BeforeLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
