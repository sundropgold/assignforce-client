import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AppMaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../services/trainer/trainer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillService } from '../../services/skill/skill.service';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';
import { Skill } from '../../model/skill';
import { Component } from '@angular/core';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/observable/of';

class MockSkillService {
  getAll(): Observable<Skill[]> {
    return Observable.of([
      { skillId: 1, name: 'Java', active: true },
      { skillId: 2, name: 'SQL', active: true },
      { skillId: 3, name: 'Angular', active: true },
      { skillId: 4, name: 'C++', active: true }
    ]);
  }
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
        declarations: [ProfileComponent],
        providers: [TrainerService, { provide: SkillService, useClass: MockSkillService }, S3CredentialService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate component.skills', () => {
    component.populateSkillList();
    expect(component.skills.length).toBe(4, 'skills not populated correctly');
  });

  it('should return a skill array', () => {
    component.getAllSkills();
    expect(component.skills.length).toBe(4, 'get all skills not fetching properly');
  });
});
