import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
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

  it('should contain a mat-list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-list')).toBeTruthy();
  });

  it('should contain the skill name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.skill-name').textContent).toContain(component.skillData[0].name);
  });

  it('should contain an accordion for the skills', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-accordion')).toBeTruthy();
  });

  it('should contain a title named Skills', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-panel-title').textContent).toContain('Skills');
  });

  it('should add a skill when the add skill function is called', () => {
    fixture.detectChanges();
    component.addSkill("This doesn't matter");
  });

  it('should have a remove button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.remove-button')).toBeTruthy();
  });

  it('should have an edit button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.edit-button')).toBeTruthy();
  });
});
