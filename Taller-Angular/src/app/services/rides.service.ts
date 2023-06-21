import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';

import { Ride } from '../models/rides.interface';
import { handleError } from '../modules/shared/functions/handle-error-function';
import { AirTableData } from '../models/record.interface';

@Injectable({
  providedIn: 'root',
})
export class RidesService {
  private endpoint = 'appVKGaPxptaKmoJG/tblobpdQvELzzWsbK';
  private url = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {}

  getRideList(): Observable<AirTableData> {
    return this.http.get<AirTableData>(this.url).pipe(catchError(handleError));
  }
}
