import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainCardLayoutComponent } from '@modules/shared/main-card-layout/main-card-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainCardLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'clients',
            loadChildren: () =>
              import('@modules/clients/clients.module').then(
                (m) => m.ClientsModule
              ),
          },
          {
            path: 'moderators',
            loadChildren: () =>
              import('@modules/moderator/moderator.module').then(
                (m) => m.ModeratorModule
              ),
          },
          {
            path: 'shift',
            loadChildren: () =>
              import('@modules/shift/shift.module').then((m) => m.ShiftModule),
          },
        ],
      },
      {
        path: 'rides',
        loadChildren: () =>
          import('@modules/rides/rides.module').then((m) => m.RidesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
