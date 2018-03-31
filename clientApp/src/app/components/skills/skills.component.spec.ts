import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { AppMaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../../model/Skill';
import { SkillService } from '../../services/skill/skill.service';
import { Observable } from 'rxjs/Observable';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  const testData: Skill[] = [new Skill(1, 'Test Skill', true), new Skill(2, 'Test Skill 2', true)];
  let skillService = SkillService;

  class MockSkillService {
    getAll(): Observable<Skill[]> {
      return Observable.of(testData);
    }
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [SkillsComponent],
        providers: [{ provide: SkillService, useClass: MockSkillService }]
      }).compileComponents();
      skillService = TestBed.get(SkillService);
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
