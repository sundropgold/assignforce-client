import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AddFocusComponent } from './components/add-focus/add-focus.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { AuthenticatingComponent } from './components/authenticating/authenticating.component';
import { BatchesComponent } from './components/batches/batches.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CoreComponent } from './components/core/core.component';
import { CurriculaComponent } from './components/curricula/curricula.component';
import { CurriculumSkillsComponent } from './components/curriculum-skills/curriculum-skills.component';
import { EditFocusComponent } from './components/edit-focus/edit-focus.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { FociComponent } from './components/foci/foci.component';
import { LocationAddDialogComponent } from './components/locations/add-dialog/location-add-dialog.component';
import {
  LocationAddLocationDialogComponent,
  LocationAddRoomDialogComponent,
  LocationDeleteBuildingDialogComponent,
  LocationDeleteLocationDialogComponent,
  LocationDeleteRoomDialogComponent,
  LocationEditBuildingDialogComponent,
  LocationEditLocationDialogComponent,
  LocationEditRoomDialogComponent,
  LocationsComponent
} from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TrainerItemComponent } from './components/trainers/trainer-item/trainer-item.component';
import { TrainersAddComponent } from './components/trainers/trainers-add/trainers-add.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { SpringXsrfInterceptor } from './interceptors/springXsrfInterceptor';
import { AppMaterialModule } from './material.module';
import { AddressControllerService } from './services/api/address-controller/address-controller.service';
import { BatchControllerService } from './services/api/batch-controller/batch-controller.service';
import { BuildingControllerService } from './services/api/building-controller/building-controller.service';
import { CurriculumControllerService } from './services/api/curriculum-controller/curriculum-controller.service';
import { SettingControllerService } from './services/api/setting-controller/setting-controller.service';
import { SkillControllerService } from './services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from './services/api/trainer-controller/trainer-controller.service';
import { UnavailableControllerService } from './services/api/unavailable-controller/unavailable-controller.service';
import { AuthService } from './services/auth/auth.service';
import { GuardService } from './services/auth/guard.service';
import { SecurityContext } from './services/auth/security-context.service';
import { S3CredentialService } from './services/s3-credential/s3-credential.service';
import { UrlService } from './services/url/url.service';
import { BatchesTimelineComponent } from './components/batches-timeline/batches-timeline.component';
import { BatchesTimelineFilterComponent } from './components/batches-timeline-filter/batches-timeline-filter.component';
import { FocusControllerService } from './services/api/focus-controller/focus-controller.service';
import { RoomControllerService } from './services/api/room-controller/room-controller.service';
import { InterceptorsService } from './services/auth/interceptors.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    BatchesComponent,
    LocationsComponent,
    CurriculaComponent,
    TrainersComponent,
    ProfileComponent,
    ReportsComponent,
    SettingsComponent,
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddDialogComponent, // LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    LoginComponent,
    SkillsComponent,
    FociComponent,
    CoreComponent,
    BatchesTimelineComponent,
    BatchesTimelineFilterComponent,
    AddFocusComponent,
    AddSkillComponent,
    EditFocusComponent,
    EditSkillComponent,
    TrainersAddComponent,
    TrainerItemComponent,
    AuthenticatingComponent,
    CertificationsComponent,
    CurriculumSkillsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    AppMaterialModule
    //InMemoryWebApiModule.forRoot(InMemDbService)
  ],

  exports: [AppMaterialModule],

  providers: [
    S3CredentialService,
    HttpClient,
    UrlService,
    BatchControllerService,
    AddressControllerService,
    BuildingControllerService,
    CurriculumControllerService,
    SettingControllerService,
    SkillControllerService,
    TrainerControllerService,
    UnavailableControllerService,
    FocusControllerService,
    RoomControllerService,
    AuthService,
    GuardService,
    SecurityContext,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorsService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddDialogComponent, // LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    AddFocusComponent,
    EditFocusComponent,
    AddSkillComponent,
    EditSkillComponent,
    TrainersAddComponent
  ]
})
export class AppModule {}
