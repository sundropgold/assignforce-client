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
import { Skill } from '../../model/Skill';
import { Component } from '@angular/core';
import { of } from 'rxjs/Observable/of';
import 'rxjs/add/observable/of';
import { CompileNgModuleMetadata } from '@angular/compiler';

//creates a fake skill service to pass test values
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

  //sets up the component before each test
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule], //sets imports
        declarations: [ProfileComponent], //sets declarations
        providers: [TrainerService, { provide: SkillService, useClass: MockSkillService }, S3CredentialService] //set providers, using our fake service instead of the real one
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test component initialization
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should populate the component's skills array with skills from the service
  it('should populate component.skills', () => {
    component.populateSkillList();
    expect(component.skills.length).toBe(4, 'skills not populated correctly');
  });

  //TEST: getAllSkills should get all skills the teacher does and doesn't have, should be 4 because the component trainer has no skills currently
  it('should return a skill array', () => {
    component.skillsList = [];
    component.getAllSkills();
    expect(component.skillsList.length).toBe(4, 'get all skills not fetching properly');
  });

  // TEST: remove should remove java form the skillsList array
  it('should remove a skill from the skills list', () => {
    component.remove('Java');
    expect(component.skillsList.length).toBe(3, 'skill not properly removed');
  });
});
