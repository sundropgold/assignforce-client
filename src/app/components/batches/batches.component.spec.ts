import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatchesTimelineComponent } from '../batches-timeline/batches-timeline.component';
import { BatchesTimelineFilterComponent } from '../batches-timeline-filter/batches-timeline-filter.component';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

import { AppMaterialModule } from '../../material.module';
import { BatchesComponent } from './batches.component';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';

describe('BatchesComponent', () => {
  let component: BatchesComponent;
  let fixture: ComponentFixture<BatchesComponent>;

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
        declarations: [BatchesComponent, BatchesTimelineComponent, BatchesTimelineFilterComponent],
        providers: [
          BatchControllerService,
          TrainerControllerService,
          SkillControllerService,
          CurriculumControllerService,
          AddressControllerService
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
