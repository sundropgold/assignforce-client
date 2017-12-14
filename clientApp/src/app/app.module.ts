import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OverviewComponent } from './overview/overview.component';
import { BatchesComponent } from './batches/batches.component';
import { LocationsComponent } from './locations/locations.component';
import { CurriculaComponent } from './curricula/curricula.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======

>>>>>>> 5285ef5c174e270d176c22acc5b6ba28de4da67b
import {TrainerService} from './services/trainer.service';
import {SkillService} from './services/skill.service';
import {S3CredentialService} from './services/s3-credential.service';
import {
<<<<<<< HEAD
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";
=======
  MatButtonModule, MatCardModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
>>>>>>> 5285ef5c174e270d176c22acc5b6ba28de4da67b

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
    SettingsComponent
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
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    MatProgressSpinnerModule,
<<<<<<< HEAD
    MatFormFieldModule,
    MatInputModule,
=======
    MatFormFieldModule
>>>>>>> 5285ef5c174e270d176c22acc5b6ba28de4da67b
  ],
  providers: [TrainerService, SkillService, S3CredentialService],
  bootstrap: [AppComponent]
})

export class AppModule {}
