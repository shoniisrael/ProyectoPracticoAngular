import { Component } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { RidesService } from '../../services/rides.service';
import { AirTableData } from 'src/app/models/record.interface';

export interface TableColumn<T> {
  label: string;
  property: string;
  type?: 'text' | 'image' | 'button';
  visible?: boolean;
}
@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {
  ridesList$: Observable<AirTableData>;

  public displayedColumns: TableColumn<any>[] = [
    { label: 'User', property: 'userName', type: 'text' },
    { label: 'Car Comfort', property: 'carConfort', type: 'text' },
    { label: 'Ordered Time', property: 'orderedTime', type: 'text' },
    { label: 'Start Location', property: 'startLocation', type: 'text' },
    {
      label: 'Finish Location',
      property: 'finishLocation',
      type: 'text',
    },
    { label: 'Income', property: 'income', type: 'text' },
  ];
  constructor(private ridesService: RidesService) {
    this.ridesList$ = this.ridesService.getRideList();
    // .pipe(tap((data) => console.info(data, 'data de db')));
  }
}
