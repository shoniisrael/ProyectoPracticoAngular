import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CardDriverComponent } from 'src/app/components/organisms/card-driver/card-driver.component';
import { CardPercentComponent } from 'src/app/components/organisms/card-percent/card-percent.component';
import { IconComponent } from '@modules/shared/icon/icon.component';
import { TopDriversComponent } from './components/top-drivers/top-drivers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [
    KnowledgeBaseComponent,
    DashboardComponent,
    CardDriverComponent,
    CardPercentComponent,
    TopDriversComponent,
  ],
  imports: [CommonModule, IconComponent, RouterModule.forChild(routes)],
})
export class DashboardModule {}
