import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../../material.module';
import { SkillsComponent } from './skills.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule, MatCardContent } from '@angular/material/card';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule],
        declarations: [SkillsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
