import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AirTableData } from 'src/app/models/record.interface';
import { DriverService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-top-drivers',
  templateUrl: './top-drivers.component.html',
  styleUrls: ['./top-drivers.component.scss'],
})
export class TopDriversComponent {
  public drivers$: Observable<AirTableData>;
  constructor(private driverService: DriverService) {
    this.drivers$ = this.driverService.getDriversList();
  }
}
