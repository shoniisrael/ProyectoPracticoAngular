import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '@modules/shared/components/table/table.component';
import { ButtonComponent } from '@modules/shared/button/button.component';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientFormComponent } from '@modules/client-form/client-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
];

@NgModule({
  declarations: [ClientsComponent, ClientFormComponent],
  imports: [
    ButtonComponent,
    CommonModule,
    TableComponent,
    RouterModule.forChild(routes),
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
})
export class ClientsModule {}
