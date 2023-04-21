import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { catchError, mapTo, Observable, tap } from 'rxjs';
import { handleError } from '../modules/shared/functions/handle-error-function';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  user={
    role: sessionStorage.getItem('role')
  };
  constructor(private http: HttpClient) { }
 
  login(body: UserLogin): Observable<any> {
    console.log(body)
   
    return this.http.post<any>(`${this.url}login`, body)
      .pipe(
        tap(response => {
          if (response && response.length > 0) {
            sessionStorage.setItem('token', response.accessToken); // Almacenar el token en sessionStorage

            this.user = response.user
          }
        }), mapTo({
          status: true,
          message: 'Bienvenido!'
        }),
        catchError(handleError));
  }
}
interface UserLogin{
  phoneNumber?: string;
  password: string;
  email?: string;
}