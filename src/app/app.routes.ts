import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PolicyHolderListComponent } from './features/policy-holders/policy-holder-list/policy-holder-list.component';
import { PolicyHolderFormComponent } from './features/policy-holders/policy-holder-form/policy-holder-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'policyholders',
        component: PolicyHolderListComponent
      },

      {
        path: 'policyholders/add',
        component: PolicyHolderFormComponent
      },

      {
        path: 'policyholders/edit/:id',
        component: PolicyHolderFormComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];