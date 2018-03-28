import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpringXsrfInterceptor } from './interceptors/springXsrfInterceptor';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BatchesComponent } from './components/batches/batches.component';
import {
  // LocationAddBuildingDialogComponent,
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
import { LocationAddDialogComponent } from './components/locations/add-dialog/location-add-dialog.component';
import { CurriculaComponent } from './components/curricula/curricula.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainerService } from './services/trainer/trainer.service';
import { SkillService } from './services/skill/skill.service';
import { S3CredentialService } from './services/s3-credential/s3-credential.service';
import { UrlService } from './services/url/url.service';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatOptionModule,
  MatNativeDateModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

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
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    TrainerService,
    SkillService,
    S3CredentialService,
    HttpClient,
    UrlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
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
    LocationEditRoomDialogComponent
  ]
})
export class AppModule {}
