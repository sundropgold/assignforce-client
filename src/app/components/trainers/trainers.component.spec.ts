import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersComponent } from './trainers.component';
import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { TrainerService } from '../../services/trainer/trainer.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Trainer } from '../../model/Trainer';

describe('TrainersComponent', () => {
  let component: TrainersComponent;
  let fixture: ComponentFixture<TrainersComponent>;
  let trainerService: TrainerService;

  class MockTrainerService {
    getAll() {}
  }

  let mockClient;

  beforeEach(() => {
    mockClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      declarations: [TrainersComponent, TrainerItemComponent],
      imports: [AppMaterialModule],
      providers: [
        { provide: TrainerService, useClass: MockTrainerService },
        { provide: HttpClient, useValue: mockClient }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainersComponent);
    component = fixture.componentInstance;
    trainerService = TestBed.get(TrainerService);
    mockClient = TestBed.get(HttpClient);
    console.log(mockClient);
  });

  // beforeEach(
  //   async(() => {
  //     TestBed.configureTestingModule({
  //       imports: [AppMaterialModule, HttpClientModule],
  //       declarations: [TrainersComponent, TrainerItemComponent],
  //       providers: [TrainerService]
  //     }).compileComponents();
  //   })
  // );

  // beforeEach(() => {

  //   fixture = TestBed.createComponent(TrainersComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // add trainer
  // // it('should receive trainer data', () => {});
  // it('should get all trainers from the database', () =>{
  //    this.trainerService.getAll();
  //   let trainerServiceSpy = spyOn(trainerService,'getAll').and
  //   .returnValue(Observable.create(observer=>{
  //     observer.next();
  //   }));
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(component.data).toBe(undefined);
  //   });
  // });

  it(
    'should receive all of the trainers data',
    async(() => {
      const trainers: Trainer[] = [];
      mockClient.get.and.returnValue(
        Observable.create(observer => {
          observer.next(trainers);
        })
      );
      const dataServiceSpy = spyOn(trainerService, 'getAll').and.returnValue(
        Observable.create(observer => {
          observer.next(trainers);
        })
      );

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.trainers).toBe(trainers);
      });
    })
  );

  // submitting the form to the service
  // download the resume
  // retrieve all the trainers from database

  // test routing
});
