import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';
import { handleError } from '../modules/shared/functions/handle-error-function';
import { AirTableData } from '../models/record.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private endpoint = 'appVKGaPxptaKmoJG/tblYjFX5EMHPHwj87';
  private url = environment.apiUrl + this.endpoint;

  constructor(private httpClient: HttpClient) {}

  getDriversList(): Observable<AirTableData> {
    return this.httpClient
      .get<AirTableData>(this.url)
      .pipe(catchError(handleError));
  }
}
