import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SpringXsrfInterceptor} from './interceptors/springXsrfInterceptor';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {OverviewComponent} from './overview/overview.component';
import {
  BatchesComponent,
  BatchDeleteDialogComponent
} from './batches/batches.component';
import {
  LocationAddBuildingDialogComponent,
  LocationAddLocationDialogComponent, LocationAddRoomDialogComponent, LocationDeleteBuildingDialogComponent,
  LocationDeleteLocationDialogComponent, LocationDeleteRoomDialogComponent,
  LocationEditBuildingDialogComponent,
  LocationEditLocationDialogComponent, LocationEditRoomDialogComponent,
  LocationsComponent
} from './locations/locations.component';
import {CurriculaComponent,
  CurriculaCurriculumDialogComponent,
  CurriculaCreateSkillDialogComponent,
  CurriculaRemovalDialogComponent} from './curricula/curricula.component';
import {TrainerDialogComponent, TrainersComponent} from './trainers/trainers.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TrainerService} from './services/trainer.service';
import {SkillService} from './services/skill.service';
import {S3CredentialService} from './services/s3-credential.service';
import {UrlService} from './services/url.service';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatOptionModule,
  MatNativeDateModule,
  MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatSnackBarModule,
  MatDialogModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NotificationService} from './services/notification.service';
import 'aws-sdk/dist/aws-sdk.min';
import {LoginComponent} from './login/login.component';
import {TimelineComponent} from './timeline/timeline.component';
import {CalendarDialogComponent, PtoComponent, PtoDialogComponent} from './pto/pto.component';
import {OrderModule} from 'ngx-order-pipe';
import {PtoService} from './services/pto.service';
import {BatchService} from './services/batch.service';
import {CurriculaService} from './services/curricula.service';
import {LocationService} from './services/location.service';
import {RoomService} from './services/room.service';
import {BuildingService} from './services/building.service';
import {NgPipesModule} from 'ngx-pipes';
import {ReplogicService} from './replogic.service';
import { ChartModule } from 'angular-highcharts';
import {SettingsService} from './services/global-settings.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    OverviewComponent,
    BatchesComponent,
    BatchDeleteDialogComponent,
    LocationsComponent,
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    CurriculaComponent,
    CurriculaCurriculumDialogComponent,
    CurriculaCreateSkillDialogComponent,
    CurriculaRemovalDialogComponent,
    TrainersComponent,
    TrainerDialogComponent,
    CalendarDialogComponent,
    PtoDialogComponent,
    ProfileComponent,
    ReportsComponent,
    SettingsComponent,
    LoginComponent,
    TimelineComponent,
    PtoComponent,
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
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatDialogModule,
    NgPipesModule,
    OrderModule,
    ChartModule
  ],
  providers: [
    TrainerService,
    ReplogicService,
    BatchService,
    SkillService,
    S3CredentialService,
    UrlService,
    NotificationService,
    PtoService,
    CurriculaService,
    LocationService,
    BuildingService,
    RoomService,
    SettingsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    TrainerDialogComponent,
    BatchDeleteDialogComponent,
    LocationAddLocationDialogComponent,
    LocationDeleteLocationDialogComponent,
    LocationEditLocationDialogComponent,
    LocationAddBuildingDialogComponent,
    LocationDeleteBuildingDialogComponent,
    LocationEditBuildingDialogComponent,
    LocationAddRoomDialogComponent,
    LocationDeleteRoomDialogComponent,
    LocationEditRoomDialogComponent,
    CurriculaCurriculumDialogComponent,
    CurriculaCreateSkillDialogComponent,
    CurriculaRemovalDialogComponent,
    CalendarDialogComponent,
    PtoDialogComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
