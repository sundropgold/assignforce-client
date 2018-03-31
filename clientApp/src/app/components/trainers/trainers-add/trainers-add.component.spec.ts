import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAddComponent } from './trainers-add.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../../services/trainer/trainer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockTrainerService {}

describe('TrainersAddComponent', () => {
  let component: TrainersAddComponent;
  let fixture: ComponentFixture<TrainersAddComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule, HttpClientTestingModule],
        declarations: [TrainersAddComponent],
        providers: [
          // TrainerService,
          {
            provide: TrainerService,
            useClass: MockTrainerService
          },
          {
            provide: MatDialogRef,
            useValue: {
              close: (dialogResult: any) => {}
            }
          },
          { provide: MAT_DIALOG_DATA, useValue: {} }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
