import { Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Ride } from 'src/app/models/rides.interface';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss'],
})
export class RidesComponent {
  rides$!: Observable<Ride[]>;
  previous: boolean = true;
  next: boolean = false;
  dataRides$: BehaviorSubject<{ page: number; size: number }> =
    new BehaviorSubject<{ page: number; size: number }>({ page: 1, size: 5 });
  current: number = 1;
  constructor(private ridesService: RidesService) {
    this.rides$ = this.dataRides$.pipe(
      switchMap(({ page, size }) => this.ridesService.getRideList(page, size))
    );
  }

  nextPage(page: number) {
    this.previous = page === 1 ? true : false;
    this.next = page === 2 ? true : false;

    this.current = page;
    this.dataRides$.next({ page, size: 5 });
  }
}
