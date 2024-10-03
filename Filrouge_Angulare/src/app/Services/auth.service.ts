import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {JWT} from "../Model/jwt";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:9095/api/auth/";

  constructor(private httpClient: HttpClient) { }

  login(loginRequest: any): Observable<JWT>{
    return this.httpClient.post<JWT>(this.url + 'login', loginRequest)
  };


}
