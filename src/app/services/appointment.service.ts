// appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080'; // Asegúrate de usar la URL correcta

  constructor(private http: HttpClient) {}

  createAppointment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointments`, data);
  }

  getAppointmentsByDni(dni: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/appointments/${dni}`);
  }
  
}
