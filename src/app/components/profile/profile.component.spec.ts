import 'rxjs/add/observable/of';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';

import { AppMaterialModule } from '../../material.module';
import { Skill } from '../../model/Skill';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ActivatedRoute } from '@angular/router';
import { SkillsComponent } from '../skills/skills.component';
import { ProfileComponent } from './profile.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';

//creates a fake skill service to pass test values
class MockSkillService {
  findAll(): Observable<Skill[]> {
    return Observable.of([
      { id: 1, name: 'Java', active: true },
      { id: 2, name: 'SQL', active: true },
      { id: 3, name: 'Angular', active: true },
      { id: 4, name: 'C++', active: true }
    ]);
  }
}

// class MockAuthService {}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  //sets up the component before each test
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule], //sets imports
        declarations: [ProfileComponent, CertificationsComponent], //sets declarations
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          S3CredentialService,
          {
            provide: SkillControllerService,
            useClass: MockSkillService
          }
        ] //set providers, using our fake service instead of the real one
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  // should populate the component's skills array with skills from the service
  it('should populate component.skills', () => {
    component.populateSkills();
    expect(component.skills.length).toBe(4, 'skills not populated correctly');
  });

  // TEST: getAllSkills should get all skills the teacher does and doesn't have, should be 4 because the component trainer has no skills currently
  it('should return a skill array', () => {
    component.ngOnInit();
    expect(component.skillsList.length).toBe(4, 'get all skills not fetching properly');
  });

  // TEST: remove should remove java form the skillsList array
  it('should remove a skill from the skills list', () => {
    component.ngOnInit();
    component.remove('Java');
    expect(component.skillsList.length).toBe(3, 'skill not properly removed');
  });
});
