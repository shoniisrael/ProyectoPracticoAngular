import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { RidesComponent } from './modules/rides/rides.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rides', 
        loadChildren: () => import('@modules/rides/rides.module').then((m) => m.RidesModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('@modules/clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: 'moderators',
        loadChildren: () => import('@modules/moderator/moderator.module').then((m) => m.ModeratorModule),
      },
      {
        path: 'shift',
        loadChildren: () => import('@modules/shift/shift.module').then((m) => m.ShiftModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
