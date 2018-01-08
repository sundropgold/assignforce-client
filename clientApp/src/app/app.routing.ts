import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from './overview/overview.component';
import {BatchesComponent} from './batches/batches.component';
import {LocationsComponent} from './locations/locations.component';
import {CurriculaComponent} from './curricula/curricula.component';
import {TrainersComponent} from './trainers/trainers.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';
import {LoginSuccessComponent} from './login-success/login-success.component';
import {AuthGuardService} from './services/auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'loginsuccess',
    component: LoginSuccessComponent
    },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [AuthGuardService],

  },
  {
    path: 'batches',
    component: BatchesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'curricula',
    component: CurriculaComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'trainers',
    component: TrainersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
