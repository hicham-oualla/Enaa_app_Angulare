import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApprenantDTO, Apprenants} from '../Model/apprenants/apprenants';
import {AuthenticationResponse} from "../Model/authentication-response"; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  private apiUrl = 'http://localhost:9095/api/apprenants'; // Base URL for the API

  constructor(private http: HttpClient) { }

  // Create a new Apprenant
  registerApprenant(apprenant: ApprenantDTO): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/Add`, apprenant);
  }

  // Get an Apprenant by ID
  getApprenantById(id: number| null): Observable<ApprenantDTO> {
    return this.http.get<ApprenantDTO>(`${this.apiUrl}/getApprenants/${id}`);
  }

  // Get all Apprenants
  getAllApprenants(): Observable<Apprenants[]> {
    return this.http.get<Apprenants[]>(`${this.apiUrl}/GetALL`);
  }

  // Update an Apprenant by ID
  updateApprenant(id: number, apprenantDTO: Apprenants): Observable<Apprenants> {
    return this.http.put<Apprenants>(`${this.apiUrl}/edit/${id}`, apprenantDTO);
  }

  // Delete an Apprenant by ID
  deleteApprenant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Find all Apprenants by Classe ID
  findAllByClasseId(id: number): Observable<ApprenantDTO[]> {
    return this.http.get<ApprenantDTO[]>(`${this.apiUrl}/Allapprenants/byclasse/${id}`);
  }

  // Find Apprenant by ID with Optional handling
  findApprenantById(id: number): Observable<ApprenantDTO> {
    return this.http.get<ApprenantDTO>(`${this.apiUrl}/FindAPPby/${id}`);
  }
}
