import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SpringXsrfInterceptor} from './interceptors/springXsrfInterceptor';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {OverviewComponent} from './overview/overview.component';
import {BatchesComponent} from './batches/batches.component';
import {LocationsComponent} from './locations/locations.component';
import {CurriculaComponent} from './curricula/curricula.component';
import {TrainersComponent} from './trainers/trainers.component';
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
  MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatSnackBarModule
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NotificationService} from './services/notification.service';
import 'aws-sdk/dist/aws-sdk.min';
import {LoginComponent} from './login/login.component';
import {TimelineComponent} from './timeline/timeline.component';
import {OrderModule} from 'ngx-order-pipe';


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
    LoginComponent,
    TimelineComponent
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
    OrderModule,
    FlexLayoutModule
  ],
  providers: [
    TrainerService,
    SkillService,
    S3CredentialService,
    UrlService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpringXsrfInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
