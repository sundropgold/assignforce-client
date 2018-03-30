import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillComponent } from './edit-skill.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../../model/skill';
import { FormsModule } from '@angular/forms';

describe('EditSkillComponent', () => {
  let component: EditSkillComponent;
  let fixture: ComponentFixture<EditSkillComponent>;
  const mockDialogData: Skill = { skillId: 1, name: 'Test Skill', active: true };

  class MockDialogRef {
    close() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EditSkillComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
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
