import 'rxjs/add/observable/of';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { SkillsComponent } from './skills.component';

class MockSkillService {
  getAll(): Observable<Skill[]> {
    return Observable.of([
      { skillId: 1, name: 'Java', active: true },
      { skillId: 2, name: 'SQL', active: true },
      { skillId: 3, name: 'Angular', active: true },
      { skillId: 4, name: 'C++', active: true }
    ]);
  }
}

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [SkillsComponent],
        providers: [HttpClient]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //should populate the component's skills array with skills from the service
  it('should populate component.skills', () => {
    component.populateSkillList();
    expect(component.skills.length).toBe(4, 'skills not populated correctly');
  });

  //TEST: getAllSkills should get all skills the teacher does and doesn't have, should be 4 because the component trainer has no skills currently
  // it('should return a skill array', () => {
  //   component.skillsList = [];
  //   component.getAllSkills();
  //   expect(component.skillsList.length).toBe(4, 'get all skills not fetching properly');
  // });

  // TEST: remove should remove java form the skillsList array
  it('should remove Java from the skillsList', () => {
    component.remove('Java');
    expect(component.skillsList.length).toBe(3, 'skill not properly removed');
  });
});
