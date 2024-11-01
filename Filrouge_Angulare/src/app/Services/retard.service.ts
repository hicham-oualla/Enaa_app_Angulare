import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Retard,RetardUpdate} from "../Model/retard/reatrd";

 // Adjust the path according to your structure

@Injectable({
  providedIn: 'root',
})
export class RetardService {
  private apiUrl = 'http://localhost:9095/api/retards'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Save a new Retard
  saveRetard(retard: Retard, apprenantId: number): Observable<Retard> {
    return this.http.post<Retard>(`${this.apiUrl}/saveRetard&app/${apprenantId}`, retard);
  }

  // Get all Retards
  getAllRetards(): Observable<Retard[]> {
    return this.http.get<Retard[]>(`${this.apiUrl}/All`);
  }

  // Get Retard by ID
  getRetardById(id: number): Observable<Retard> {
    return this.http.get<Retard>(`${this.apiUrl}/getRetardById/${id}`);
  }

  // Update a Retard
  updateRetard(id: number, retard: RetardUpdate): Observable<RetardUpdate> {
    const data = {
      ...retard,
      apprenant: undefined
    }
    return this.http.put<RetardUpdate>(`${this.apiUrl}/updateRetard/${id}`, data);
  }

  // Delete a Retard
  deleteRetard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteRetard/${id}`);
  }

  // Count Retards by Apprenant
  countRetardsByApprenant(apprenantId: number | null): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countRetardsByApprenant/${apprenantId}`);
  }

  // Get Retards by Apprenant ID
  getRetardsByApprenant(apprenantId: number|null): Observable<Retard[]> {
    return this.http.get<Retard[]>(`${this.apiUrl}/getRetardsByApprenant/${apprenantId}`);
  }
}
