import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTimelineFilterComponent } from './batches-timeline-filter.component';
import { AppMaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { batches } from '../../mockdb/mockdata/batch.data';

describe('BatchesTimelineFilterComponent', () => {
  let component: BatchesTimelineFilterComponent;
  let fixture: ComponentFixture<BatchesTimelineFilterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AppMaterialModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientTestingModule,
          BrowserAnimationsModule
        ],
        declarations: [BatchesTimelineFilterComponent],
        providers: [{ provide: BatchControllerService }]
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
