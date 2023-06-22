import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AirTableData } from '../models/record.interface';
import { Observable, catchError } from 'rxjs';
import { handleError } from '@modules/shared/functions/handle-error-function';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private endpoint = 'appVKGaPxptaKmoJG/tblM86c1jjqCw22sK';
  private url = environment.apiUrl + this.endpoint;

  constructor(private http: HttpClient) {}

  getClientsList(): Observable<AirTableData> {
    return this.http.get<AirTableData>(this.url).pipe(catchError(handleError));
  }
}
