import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../services/trainer/trainer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SkillService } from '../../services/skill/skill.service';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, FormsModule, HttpClientTestingModule, BrowserAnimationsModule],
        declarations: [ProfileComponent],
        providers: [TrainerService, SkillService, S3CredentialService]
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
});
