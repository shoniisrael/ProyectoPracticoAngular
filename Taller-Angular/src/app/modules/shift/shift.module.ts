import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftComponent } from './shift.component';
import { RouterModule, Routes } from '@angular/router';
import { IconComponent } from '@modules/shared/icon/icon.component';
import { InputComponent } from '@modules/shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@modules/shared/button/button.component';

const routes: Routes = [
  {
    path: '',
    component: ShiftComponent
  },
];

@NgModule({
  declarations: [
    ShiftComponent
  ],
  imports: [
    ButtonComponent,
    CommonModule,
    IconComponent,
    InputComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ShiftModule { }
