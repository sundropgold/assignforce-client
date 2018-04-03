import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculaComponent } from './curricula.component';
import { CoreComponent } from '../core/core.component';
import { FociComponent } from '../foci/foci.component';
import { SkillsComponent } from '../skills/skills.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curriculum } from '../../model/Curriculum';
import { Observable } from 'rxjs/Observable';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { CurriculumSkillsComponent } from '../curriculum-skills/curriculum-skills.component';

describe('CurriculaComponent', () => {
  let component: CurriculaComponent;
  let fixture: ComponentFixture<CurriculaComponent>;
  const testData: Curriculum[] = [
    new Curriculum(1, 'Test Curriculum', true, true, [{ skillId: 1, name: 'Test Skill', active: true }]),
    new Curriculum(2, 'Test Curriculum 2', true, true, [{ skillId: 1, name: 'Test Skill', active: true }])
  ];
  const testData2: Skill[] = [new Skill(1, 'Test Skill', true), new Skill(2, 'Test Skill 2', true)];
  let skillControllerService = SkillControllerService;
  let curriculumControllerService = CurriculumControllerService;

  class MockCurriculaService {
    retrieveAllActiveCore(): Observable<Curriculum[]> {
      return Observable.of(testData);
    }
    retrieveAllActiveFocus(): Observable<Curriculum[]> {
      return Observable.of(testData);
    }
  }

  class MockSkillControllerService {
    findAll(): Observable<Skill[]> {
      return Observable.of(testData2);
    }
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [CurriculaComponent, CoreComponent, FociComponent, CurriculumSkillsComponent],
        providers: [
          { provide: CurriculumControllerService, useClass: MockCurriculaService },
          { provide: SkillControllerService, useClass: MockSkillControllerService }
        ]
      }).compileComponents();
      curriculumControllerService = TestBed.get(CurriculumControllerService);
      skillControllerService = TestBed.get(SkillControllerService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
