import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTimelineComponent } from './batches-timeline.component';

describe('BatchesTimelineComponent', () => {
  let component: BatchesTimelineComponent;
  let fixture: ComponentFixture<BatchesTimelineComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BatchesTimelineComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
