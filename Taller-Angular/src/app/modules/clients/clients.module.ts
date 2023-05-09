import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '@modules/shared/components/table/table.component';
import { ButtonComponent } from '@modules/shared/button/button.component';


const routes: Routes = [
  {
    path: '',
    component: ClientsComponent
  },
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ]
})
export class ClientsModule { }
