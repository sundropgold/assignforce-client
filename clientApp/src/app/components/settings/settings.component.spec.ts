import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  let mockClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatGridListModule
      ],
      declarations: [SettingsComponent],
      providers: [{ provide: HttpClient, useValue: mockClient }]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    mockClient = TestBed.get(HttpClient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
