import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Absence} from "../Model/absence";
import {AbsenceDTO} from "../Model/absence-dto/absence-dto";


@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private apiUrl = 'http://localhost:9095/api/absences';

  constructor(private http: HttpClient) { }

  getAllAbsences(): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.apiUrl}/getALL`);
  }

  saveAbsence(absenceDTO: AbsenceDTO): Observable<Absence> {
    return this.http.post<Absence>(`${this.apiUrl}/Add`, absenceDTO);
  }

  getAbsenceById(id: number): Observable<Absence> {
    return this.http.get<Absence>(`${this.apiUrl}/AbsencebyID/${id}`);
  }

  updateAbsence(id: number, absenceDTO: AbsenceDTO): Observable<Absence> {
    return this.http.put<Absence>(`${this.apiUrl}/Edit/${id}`, absenceDTO);
  }

  deleteAbsence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  countAbsencesByApprenant(apprenantId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countABS/apprenant/${apprenantId}`);
  }

  getAbsencesByApprenant(apprenantId: number): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.apiUrl}/GetAbsenceBYapprenant/${apprenantId}`);
  }
}
