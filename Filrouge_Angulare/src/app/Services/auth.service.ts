import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {JWT} from "../Model/jwt/jwt";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:9095/api/auth/";
  private jwt = new JwtHelperService();
  constructor(private httpClient: HttpClient,
              private  route:Router) { }

  login(loginRequest: any): Observable<JWT>{
    return this.httpClient.post<JWT>(this.url + 'login', loginRequest)
  };
  getToken() : string | null{
    return localStorage.getItem('access_token');
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }
  lougout():void{
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    localStorage.removeItem('character_id')
    this.route.navigate(['/'])

  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null && !this.jwt.isTokenExpired(token);
  }
  getCurrentUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken.role;
    }
    return null;
  }

  getCurrentUserFirstName(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken.firstname;
    }
    return null;
  }
  getCurrentUserLastName(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken.lastname;
    }
    return null;
  }

  getCurrentUserEmail(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken.email;
    }
    return null;
  }

  getCurrentUserId(): number | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.jwt.decodeToken(token);
      return decodedToken.id;
    }
    return null;
  }



}
