import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TrainersAddComponent } from './trainers-add.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TrainersComponent } from '../trainers.component';
import { TrainerService } from '../../../services/trainer/trainer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Trainer } from '../../../model/Trainer';
import { Skill } from '../../../model/Skill';

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

  it('should call onNoClick', () => {
    spyOn(component, 'onNoClick');
    component.onNoClick();
    expect(component.onNoClick).toHaveBeenCalled();
  });

  it('should call onSubmit', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  // it(
  //   'should create Trainer',
  //   inject([TrainerService], (service: TrainerService) => {
  //     const Skillz: Skill[] = [
  //       {
  //         skillId: 1,
  //         name: 'Java',
  //         active: true
  //       }
  //     ];
  //     const trainer: Trainer = {
  //       trainerId: 0,
  //       firstName: '',
  //       lastName: '',
  //       skills: Skill[1],
  //       certifications: '',
  //       active: true,
  //       resume: '',
  //       unavailabilities: []
  //     };

  //     expect(service.create(trainer)).toBeTruthy();
  //   })
  // );
});
