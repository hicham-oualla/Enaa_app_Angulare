import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JustificationRetardService {
  private baseUrl = 'http://localhost:9095/api/justificationsRetard'; // Adjust this URL if needed

  constructor(private http: HttpClient) { }

  // Upload the justification for a specific retard ID
  uploadJustificationRetard(retardId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('retardId', retardId.toString());
    formData.append('pdf', file, file.name);

    return this.http.post(`${this.baseUrl}/upload`, formData, { responseType: 'text' });
  }

  // Get the PDF justification for a specific retard ID
  getJustificationRetardPdf(retardId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/pdf/${retardId}`, {
      responseType: 'blob' // Important to get the file as a Blob
    });
  }
}
