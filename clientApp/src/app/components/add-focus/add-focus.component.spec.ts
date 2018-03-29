import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFocusComponent } from './add-focus.component';

describe('AddFocusComponent', () => {
  let component: AddFocusComponent;
  let fixture: ComponentFixture<AddFocusComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddFocusComponent]
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
});
