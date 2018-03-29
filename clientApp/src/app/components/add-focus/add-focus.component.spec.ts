import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFocusComponent } from './add-focus.component';
import { MatDialogRef } from '@angular/material';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddFocusComponent', () => {
  let component: AddFocusComponent;
  let fixture: ComponentFixture<AddFocusComponent>;

  class MockDialogRef {
    close() {}
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddFocusComponent],
        providers: [{ provide: MatDialogRef, useClass: MockDialogRef }],
        imports: [AppMaterialModule, BrowserAnimationsModule]
      }).compileComponents();
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
