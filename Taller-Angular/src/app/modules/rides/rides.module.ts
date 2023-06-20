import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidesComponent } from './rides.component';
import { ProgresivebarRidesComponent } from './progresivebar-rides/progresivebar-rides.component';
import { RouterModule, Routes } from '@angular/router';
import { VerticalDetailedRideComponent } from './vertical-detailed-ride/vertical-detailed-ride.component';

const routes: Routes = [{ path: '', component: RidesComponent }];

@NgModule({
  declarations: [
    RidesComponent,
    ProgresivebarRidesComponent,
    VerticalDetailedRideComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RidesModule {}
