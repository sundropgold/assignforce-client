import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AppMaterialModule} from "../../../app-material/app-material.module";
import { TrainerItemComponent } from './trainer-item.component';
import { Skill } from '../../../model/skill';

describe('TrainerItemComponent', () => {
  let component: TrainerItemComponent;
  let fixture: ComponentFixture<TrainerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppMaterialModule],
      declarations: [ TrainerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   // test trainer deactivation
  it('should switch trainer to deactivated condition', ()=>{
    const Skillz: Skill[] = [{
      skillId: 1,
      name: 'Java',
      active: true
    }];
    
    let dummy = {
      trainerId: 1,
      firstName: 'James',
      lastName: 'Smith',
      skills: Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume',
    };

    component.removeTrainer(dummy);
    expect(dummy.active).toBe(false);
    
  });

  // test trainer reactivation
  it('should switch trainer to active condition',()=>{
    const Skillz: Skill[] = [{
      skillId: 1,
      name: 'Java',
      active: true
    }];
    
    let dummy = {
      trainerId: 1,
      firstName: 'James',
      lastName: 'Smith',
      skills: Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume',
    };

    component.activateTrainer(dummy);
    expect(dummy.active).toBe(true);
  });
  
});
