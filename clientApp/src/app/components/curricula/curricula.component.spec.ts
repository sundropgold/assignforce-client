import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculaComponent } from './curricula.component';
import { CoreComponent } from '../core/core.component';
import { FociComponent } from '../foci/foci.component';
import { SkillsComponent } from '../skills/skills.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurriculaComponent', () => {
  let component: CurriculaComponent;
  let fixture: ComponentFixture<CurriculaComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [CurriculaComponent, CoreComponent, FociComponent, SkillsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain core curriculum', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-core')).toBeTruthy();
  });

  it('should contain focuses', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-foci')).toBeTruthy();
  });

  it('should contain skills', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-skills')).toBeTruthy();
  });
});
