import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillComponent } from './edit-skill.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../../model/Skill';
import { FormsModule } from '@angular/forms';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

describe('EditSkillComponent', () => {
  let component: EditSkillComponent;
  let fixture: ComponentFixture<EditSkillComponent>;
  const mockDialogData: Skill = { skillId: 1, name: 'Test Skill', active: true };
  let skillControllerService: SkillControllerService;

  class MockDialogRef {
    close() {}
  }

  class MockSkillController {
    updateSkillCaliber() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EditSkillComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
          { provide: SkillControllerService, useClass: MockSkillController }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
      skillControllerService = TestBed.get(SkillControllerService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name variable populated with current name of skill', () => {
    fixture.detectChanges();
    expect(component.data.name).toContain('Test Skill');
  });
});
