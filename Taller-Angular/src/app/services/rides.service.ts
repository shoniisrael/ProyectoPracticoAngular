import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable} from 'rxjs';
import { Ride } from '../models/rides.interface';


@Injectable({
  providedIn: 'root'
})
export class RidesService {
  private url = environment.apiUrl;
  private endpoint = 'rides';
  constructor(private http: HttpClient) { }
  getRideList(): Observable<Ride[]>{
    return this.http.get<Ride[]>(this.url+this.endpoint);
  }
}
