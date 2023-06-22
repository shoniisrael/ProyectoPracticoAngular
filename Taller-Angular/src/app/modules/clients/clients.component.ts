import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AirTableData } from 'src/app/models/record.interface';
import { TableHeader } from 'src/app/models/rides.interface';
import { ClientsService } from 'src/app/services/clients.service';
import { Dialog } from '@angular/cdk/dialog';
import { ClientFormComponent } from '@modules/client-form/client-form.component';

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
    { label: '', property: 'action' },
  ];

  clientsList$!: Observable<AirTableData>;
  totalCount = 0;
  animal: string | undefined;
  name: string = '';

  constructor(private clientsService: ClientsService, public dialog: Dialog) {
    // this.clientsList$ = this.ridesService.getRideList()
    // .pipe(
    //   tap(data=>this.totalCount = data.length));
    this.clientsList$ = this.clientsService.getClientsList();
    console.log(this.clientsList$);
  }

  ngOnInit(): void {
    this.totalCount = 3;
  }
  onPageSelected(pageNumber: number) {
    console.log(pageNumber);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(ClientFormComponent, {
      width: '250px',
      data: { name: 'ac', animal: 'cd' },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
