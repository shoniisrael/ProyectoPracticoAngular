import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent, children:[
    { path: '', redirectTo:'dashboard', pathMatch:'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'rides', component: LoginComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
