import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Client } from 'src/app/models/client.interface';
import { AirTableData } from 'src/app/models/record.interface';
import { TableHeader } from 'src/app/models/rides.interface';
import { ClientsService } from 'src/app/services/clients.service';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  headersArray: TableHeader[] = [
    { label: 'user', property: 'user' },
    { label: 'Total rides', property: 'total_rides' },
    { label: 'Total finished', property: 'total_finished' },
    { label: 'Home Location', property: 'home_location' },
    { label: 'Work Location', property: 'work_location' },
    { label: '', property: 'action' }
  ];

  clientsList$!: Observable<AirTableData>;
  // = of([
  //   {
  //     user: {
  //       name: 'Sierra Ferguson',
  //       phone: '+9995888888',
  //       avatar: 'https://i.pravatar.cc/300',
  //     },
  //     total_rides: 4,
  //     total_finished: 10,
  //     home_location: 'Solanda, Casa47 junto al redondel principal',
  //     work_location: 'Naciones Unidas',
  //   },
  //   {
  //     user: {
  //       name: 'Andres Lopez',
  //       phone: '+9995444444',
  //       avatar: 'https://i.pravatar.cc/300',
  //     },
  //     total_rides: 2,
  //     total_finished: 5,
  //     home_location: 'Valle de los chillos',
  //     work_location: 'Av. Amazonas y pereira',
  //   },
  //   {
  //     user: {
  //       name: 'Sandra Arellano',
  //       phone: '+999522222',
  //       avatar: 'https://i.pravatar.cc/300',
  //     },
  //     total_rides: 10,
  //     total_finished: 4,
  //     home_location: 'Mitad del mundo',
  //     work_location: 'La Carolina Edificio Metropolitan',
  //   },
  // ]);

  // clientsList$: Observable<Ride[]>;
  totalCount = 0;

  constructor(private clientsService: ClientsService) {
    // this.clientsList$ = this.ridesService.getRideList()
    // .pipe(
    //   tap(data=>this.totalCount = data.length));
    this.clientsList$ = this.clientsService.getClientsList();
    console.log(this.clientsList$)

  }


  ngOnInit(): void {

    this.totalCount = 3;
  }
  onPageSelected(pageNumber: number) {
    console.log(pageNumber);
  }
}
