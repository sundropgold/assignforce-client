import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAddComponent } from './trainers-add.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppMaterialModule} from "../../../app-material/app-material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
describe('TrainersAddComponent', () => {
  let component: TrainersAddComponent;
  let fixture: ComponentFixture<TrainersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppMaterialModule, BrowserAnimationsModule, FormsModule],
      declarations: [ TrainersAddComponent ],
      providers:[{
        provide: MatDialogRef,
        useValue: {
          close: (dialogResult:any) => {}
        }
      }, {provide: MAT_DIALOG_DATA, useValue: {}}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
