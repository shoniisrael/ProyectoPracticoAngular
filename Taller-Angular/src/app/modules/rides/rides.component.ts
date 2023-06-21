import { Component } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { Ride } from '../../models/rides.interface';
import { RidesService } from '../../services/rides.service';
import { AirTableData } from 'src/app/models/record.interface';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {
  ridesList$: Observable<AirTableData>;

  constructor(private ridesService: RidesService) {
    this.ridesList$ = this.ridesService
      .getRideList()
      .pipe(tap((data) => console.info(data, 'data de db')));
  }
}
