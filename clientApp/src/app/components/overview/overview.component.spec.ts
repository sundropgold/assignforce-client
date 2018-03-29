import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Batch } from '../../model/batch';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [OverviewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export CSV', () => {
    const evt: Event = new Event('');
    component.exportToCSV(evt);
    expect(component.isExported).toBeTruthy();
  });

  it('should filter by all', () => {
    component.batchList = [
      {
        name: 'Calvin',
        startDate: new Date(0, 0, 0),
        endDate: new Date(1, 1, 1),
        curriculum: 'Java',
        focus: 'InfoSys',
        trainer: 'August',
        cotrainer: 'Mitch',
        location: 'Virginia',
        building: 'Plaza1',
        room: '214'
      },

      {
        name: 'Justin',
        startDate: new Date(0, 0, 0),
        endDate: new Date(2, 2, 2),
        curriculum: 'Java',
        focus: 'CapitalOne',
        trainer: 'August',
        cotrainer: 'Mitch',
        location: 'Virginia',
        building: 'Plaza1',
        room: '214'
      },

      {
        name: 'Flynn',
        startDate: new Date(0, 0, 0),
        endDate: new Date(3, 3, 3),
        curriculum: 'Java',
        focus: 'Cognizant',
        trainer: 'August',
        cotrainer: 'Mitch',
        location: 'Virginia',
        building: 'Plaza1',
        room: '214'
      }
    ];

    component.applyFilter(0);
    // expect(component.batchList.length)
  });

  it('should filter by in progress', () => {
    // component.applyFilter(1);
  });

  it('should filter by beginging in two weeks', () => {
    // component.applyFilter(2);
  });
});
