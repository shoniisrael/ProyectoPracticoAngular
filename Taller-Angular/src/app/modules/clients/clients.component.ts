import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ride, TableHeader } from 'src/app/models/rides.interface';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  headersArray: TableHeader[] = [
    {label: 'user', property:'user'}, 
    {label: 'car comfort', property:'car_comfort'}, 
    {label: 'ordered time', property:'ordered_time'},
    {label: 'start location', property:'start_location'}, 
    {label: 'finish location', property:'finish_location'}, 
    {label: 'income', property:'income'}, 

  ]

  clientsList$: Observable<Ride[]>;
  totalCount = 0;

  constructor(private ridesService: RidesService){
    this.clientsList$ = this.ridesService.getRideList()
    .pipe(
      tap(data=>this.totalCount = data.length));

  }
  onPageSelected(pageNumber: number) {
    console.log(pageNumber)
  }
}
