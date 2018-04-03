import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillComponent } from './add-skill.component';
import { MatDialogRef } from '@angular/material';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';
import { FormsModule } from '@angular/forms';

describe('AddSkillComponent', () => {
  let component: AddSkillComponent;
  let fixture: ComponentFixture<AddSkillComponent>;
  let skillService: SkillService;

  class MockDialogRef {
    close() {}
  }

  class MockSkillServie {
    create(skill: Skill) {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddSkillComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: SkillService, useClass: MockSkillServie }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
      skillService = TestBed.get(SkillService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a input field for skill name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.skill-name-input')).toBeTruthy();
  });

  it('should contain a button labeled Add SKill', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.add-skill-button').textContent).toContain('Add Skill');
  });
});
