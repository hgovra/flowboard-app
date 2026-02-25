import type { Routes } from '@angular/router';

import { AppShellComponent } from './layout/app-shell/app-shell';
import { AuthShellComponent } from './layout/auth-shell/auth-shell';

export const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthShellComponent,
    children: [
      /* {
        path: 'login',
        loadComponent: () =>
          import('@flowboard/features').then((m) => m.LoginPageComponent),
      }, */
    ],
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      /* {
        path: 'projects',
        loadComponent: () =>
          import('@flowboard/features').then((m) => m.ProjectsPageComponent),
      }, */
      /* {
        path: 'projects/:id',
        loadComponent: () =>
          import('@flowboard/features').then((m) => m.BoardPageComponent),
      }, */
      /* {
        path: '',
        pathMatch: 'full',
        redirectTo: 'projects',
      }, */
    ],
  },
];
