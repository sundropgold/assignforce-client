import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersComponent } from './trainers.component';
import { AppMaterialModule } from "../../app-material/app-material.module";
import {Skill} from '../../model/skill';
describe('TrainersComponent', () => {
  let component: TrainersComponent;
  let fixture: ComponentFixture<TrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [TrainersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // add trainer
  it('should receive trainer data', ()=>{

  });

  // submitting the form to the service  
  // download the resume
  // retrieve all the trainers from database
  
 
  // test routing
});
