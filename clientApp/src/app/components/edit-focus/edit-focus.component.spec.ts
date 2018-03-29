import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFocusComponent } from './edit-focus.component';

describe('EditFocusComponent', () => {
  let component: EditFocusComponent;
  let fixture: ComponentFixture<EditFocusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [EditFocusComponent]
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
});
