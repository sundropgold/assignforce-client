import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FociComponent } from './foci.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curriculum } from '../../model/Curriculum';
import { Observable } from 'rxjs/Observable';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';

describe('FociComponent', () => {
  let component: FociComponent;
  let fixture: ComponentFixture<FociComponent>;
  const testData: Curriculum[] = [
    new Curriculum(1, 'Test Curriculum', false, true, [{ skillId: 1, name: 'Test Skill', active: true }]),
    new Curriculum(2, 'Test Curriculum 2', true, true, [{ skillId: 1, name: 'Test Skill', active: true }])
  ];
  let curriculaControllerService = CurriculumControllerService;

  class MockCurriculaService {
    retrieveAllActiveFocus(): Observable<Curriculum[]> {
      return Observable.of(testData);
    }
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [FociComponent],
        providers: [{ provide: CurriculumControllerService, useClass: MockCurriculaService }]
      }).compileComponents();
      curriculaControllerService = TestBed.get(CurriculumControllerService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a mat-list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-list')).toBeTruthy();
  });

  it('should contain the focus name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.focus-name').textContent).toContain(component.focusData[0].name);
  });

  it('should contain the skills for the focus', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.focus-skills').textContent).toContain(component.focusData[0].skills[0].name);
  });

  it('should contain an accordion for the focuses', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-accordion')).toBeTruthy();
  });

  it('should contain a title named Focuses', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-panel-title').textContent).toContain('Focuses');
  });

  it('should add a focus when the add focus function is called', () => {
    fixture.detectChanges();
    component.addFocus("This doesn't matter");
  });
});
