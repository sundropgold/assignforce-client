import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './components/overview/overview.component';
import { BatchesComponent } from './components/batches/batches.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CurriculaComponent } from './components/curricula/curricula.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticatingComponent } from './components/authenticating/authenticating.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: new UrlService().getOverviewUrl(),
    component: OverviewComponent
  },
  {
    path: new UrlService().getBatchesUrl(),
    component: BatchesComponent
  },
  {
    path: new UrlService().getLocationsUrl(),
    component: LocationsComponent
  },
  {
    path: new UrlService().getCurriculaUrl(),
    component: CurriculaComponent
  },
  {
    path: new UrlService().getTrainersUrl(),
    component: TrainersComponent
  },
  {
    path: new UrlService().getProfileUrl(),
    component: ProfileComponent
  },
  {
    path: new UrlService().getReportsUrl(),
    component: ReportsComponent
  },
  {
    path: new UrlService().getSettingsUrl(),
    component: SettingsComponent
  },
  {
    path: 'callback',
    component: AuthenticatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
