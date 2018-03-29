import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersComponent } from './trainers.component';
import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/skill';
import { TrainerItemComponent } from './trainer-item/trainer-item.component';
describe('TrainersComponent', () => {
  let component: TrainersComponent;
  let fixture: ComponentFixture<TrainersComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule],
        declarations: [TrainersComponent, TrainerItemComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // add trainer
  // it('should receive trainer data', ()=>{

  // });

  // submitting the form to the service
  // download the resume
  // retrieve all the trainers from database

  // test routing
});
