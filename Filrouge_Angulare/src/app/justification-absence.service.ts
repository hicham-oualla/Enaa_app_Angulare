import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JustificationAbsenceService {

  private baseUrl = 'http://localhost:9095/api/justifications'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  // Upload Justification PDF
  uploadJustification(absenceId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('absenceId', absenceId.toString());
    formData.append('pdf', file);

    return this.http.post(`${this.baseUrl}/upload`, formData, {
      responseType: 'text' // Expecting a string response
    });
  }

  // Get Justification PDF by Absence ID
  getJustificationPdf(absenceId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/pdf/${absenceId}`, {
      responseType: 'blob' // Receive binary data
    });
  }

}
