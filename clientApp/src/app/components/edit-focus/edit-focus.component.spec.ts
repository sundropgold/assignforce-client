import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFocusComponent } from './edit-focus.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Curriculum } from '../../model/curriculum';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';
import { Observable } from 'rxjs/Observable';

describe('EditFocusComponent', () => {
  let component: EditFocusComponent;
  let fixture: ComponentFixture<EditFocusComponent>;
  const mockFocusData: Curriculum = {
    currId: 1,
    name: 'Test Focus',
    core: false,
    active: true,
    skills: [{ skillId: 1, name: 'Test Skill', active: true }]
  };
  const testData: Skill[] = [new Skill(1, 'Test Skill', true), new Skill(2, 'Test Skill 2', true)];
  let skillService = SkillService;

  class MockSkillService {
    getAll(): Observable<Skill[]> {
      return Observable.of(testData);
    }
  }

  class MockDialogRef {
    close() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EditFocusComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: MAT_DIALOG_DATA, useValue: mockFocusData },
          { provide: SkillService, useClass: MockSkillService }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
      skillService = TestBed.get(SkillService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name variable populated with current name of focus', () => {
    fixture.detectChanges();
    expect(component.data.name).toContain('Test Focus');
  });
});
