import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculaComponent } from './curricula.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CurriculaComponent', () => {
  let component: CurriculaComponent;
  let fixture: ComponentFixture<CurriculaComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [CurriculaComponent]
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
});
