import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classe } from './Model/classe';  // Create a model for Classe

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private apiUrl = 'http://localhost:9095/api/classes';  // Your Spring Boot API URL

  constructor(private http: HttpClient) {}

  getAllClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.apiUrl}/getAllClasses`);
  }

  getClasseById(id: number): Observable<Classe> {
    return this.http.get<Classe>(`${this.apiUrl}/getClasseById/${id}`);
  }

  createClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(`${this.apiUrl}/Add`, classe);
  }

  updateClasse(id: number, classe: Classe): Observable<Classe> {
    return this.http.put<Classe>(`${this.apiUrl}/updateClasse/${id}`, classe);
  }

  deleteClasse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteClasse/${id}`);
  }
}
