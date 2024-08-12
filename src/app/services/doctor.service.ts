import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:8080'; // URL de tu API

  constructor(private http: HttpClient) { }

  getDoctorsBySpecialty(specialtyId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/specialties/${specialtyId}/doctors`);
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, appointment);
  }
}
