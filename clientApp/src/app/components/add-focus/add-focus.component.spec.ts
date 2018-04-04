import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFocusComponent } from './add-focus.component';
import { MatDialogRef } from '@angular/material';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { Curriculum } from '../../model/Curriculum';

describe('AddFocusComponent', () => {
  let component: AddFocusComponent;
  let fixture: ComponentFixture<AddFocusComponent>;
  let curriculaControllerService: CurriculumControllerService;

  class MockDialogRef {
    close() {}
  }

  class MockCurriculumController {
    createCurriculum(curriculum: Curriculum) {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddFocusComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: CurriculumControllerService, useClass: MockCurriculumController }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
      curriculaControllerService = TestBed.get(CurriculumControllerService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a input field for focus name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.focus-name-input')).toBeTruthy();
  });

  it('should contain a multi select element for skils', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.focus-skill-select')).toBeTruthy();
  });

  it('should contain a button labeled Add Focus', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.add-focus-button').textContent).toContain('Add Focus');
  });
});
