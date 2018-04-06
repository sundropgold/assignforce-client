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
import { GuardService as AuthGuard } from './services/auth/guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'callback',
    component: AuthenticatingComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'batches',
        component: BatchesComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'curriculum',
        component: CurriculaComponent
      },
      {
        path: 'trainers',
        component: TrainersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
