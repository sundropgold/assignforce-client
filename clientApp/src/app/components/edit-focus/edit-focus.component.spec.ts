import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFocusComponent } from './edit-focus.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Curriculum } from '../../model/curriculum';

describe('EditFocusComponent', () => {
  let component: EditFocusComponent;
  let fixture: ComponentFixture<EditFocusComponent>;
  const mockFocusData: Curriculum = {
    currId: 1,
    name: 'Test Focus',
    core: false,
    active: true,
    skills: ['Test Skill']
  };

  class MockDialogRef {
    close() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EditFocusComponent],
        providers: [
          { provide: MatDialogRef, useClass: MockDialogRef },
          { provide: MAT_DIALOG_DATA, useValue: mockFocusData }
        ],
        imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
      }).compileComponents();
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
