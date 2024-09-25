import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Classe, Classedto} from './Model/classe';  // Create a model for Classe

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

  createClasse(classe: Classedto): Observable<Classedto> {
    return this.http.post<Classedto>(`${this.apiUrl}/Add`, classe);
  }

  updateClasse(id: number, classe: Classedto): Observable<Classedto> {
    return this.http.put<Classedto>(`${this.apiUrl}/updateClasse/${id}`, classe);
  }

  deleteClasse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteClasse/${id}`);
  }
}
