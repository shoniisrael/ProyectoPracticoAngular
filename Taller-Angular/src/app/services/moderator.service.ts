import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';
import { handleError } from '../modules/shared/functions/handle-error-function';
import { AirTableData } from '../models/record.interface';

@Injectable({
  providedIn: 'root',
})
export class ModeratorService {
  private endpoint = 'appVKGaPxptaKmoJG/tblsfrPpxpoPaPldW';
  private url = environment.apiUrl + this.endpoint;

  constructor(private httpClient: HttpClient) {}

  getModeratorsList(): Observable<AirTableData> {
    return this.httpClient
      .get<AirTableData>(this.url)
      .pipe(catchError(handleError));
  }
}
