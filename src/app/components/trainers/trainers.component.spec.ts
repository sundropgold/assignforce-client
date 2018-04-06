import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersComponent } from './trainers.component';
import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Trainer } from '../../model/Trainer';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

describe('TrainersComponent', () => {
  let component: TrainersComponent;
  let fixture: ComponentFixture<TrainersComponent>;
  let trainerService: TrainerControllerService;

  class MockTrainerService {
    getAllTrainers() {}
  }

  let mockClient;

  beforeEach(() => {
    mockClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      declarations: [TrainersComponent, TrainerItemComponent],
      imports: [AppMaterialModule],
      providers: [
        { provide: TrainerControllerService, useClass: MockTrainerService },
        { provide: HttpClient, useValue: mockClient }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainersComponent);
    component = fixture.componentInstance;
    trainerService = TestBed.get(TrainerControllerService);
    mockClient = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // add trainer
  it(
    'should receive all of the trainers data',
    async(() => {
      const trainers: Trainer[] = [];
      mockClient.get.and.returnValue(
        Observable.create(observer => {
          observer.next(trainers);
        })
      );
      const dataServiceSpy = spyOn(trainerService, 'getAllTrainers').and.returnValue(
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
});
