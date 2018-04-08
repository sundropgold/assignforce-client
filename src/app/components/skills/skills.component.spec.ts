import 'rxjs/add/observable/of';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { SkillsComponent } from './skills.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

class MockSkillService {
  findAll(): Observable<Skill[]> {
    return Observable.of([
      { id: 1, name: 'Java', active: true },
      { id: 2, name: 'SQL', active: true },
      { id: 3, name: 'Angular', active: true },
      { id: 4, name: 'C++', active: true }
    ]);
  }
}

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, HttpClientTestingModule],
        declarations: [SkillsComponent],
        providers: [
          {
            provide: SkillControllerService,
            useClass: MockSkillService
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should populate the component's skills array with skills from the service
  it('should populate component.skills', () => {
    component.ngOnInit();
    component.populateSkillList();
    expect(component.skills.length).toBe(4, 'skills not populated correctly');
  });

  //TEST: getAllSkills should get all skills the teacher does and doesn't have, should be 4 because the component trainer has no skills currently
  it('should return a skill array', () => {
    component.ngOnInit();
    component.getAllSkills();
    expect(component.skillsList.length).toBe(4, 'get all skills not fetching properly');
  });

  it('should remove Java from the skillsList', () => {
    component.skillsList = ['Java', 'SQL', 'Angular', 'C++'];
    component.remove('Java');
    expect(component.skillsList.length).toBe(3, 'skill not properly removed');
  });
});
