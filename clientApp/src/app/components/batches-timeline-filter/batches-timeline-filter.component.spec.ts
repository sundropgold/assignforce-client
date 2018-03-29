import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTimelineFilterComponent } from './batches-timeline-filter.component';

describe('BatchesTimelineFilterComponent', () => {
  let component: BatchesTimelineFilterComponent;
  let fixture: ComponentFixture<BatchesTimelineFilterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BatchesTimelineFilterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesTimelineFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
