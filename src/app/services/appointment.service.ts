// appointment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/appointments'; // Asegúrate de usar la URL correcta

  constructor(private http: HttpClient) {}

  createAppointment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getAppointmentsByDni(dni: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${dni}`);
  }

  rescheduleAppointment(appointmentId: number, newDate: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${appointmentId}`, { appointmentDate: newDate });
  }

  deleteAppointment(appointmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${appointmentId}`);
  }
  
}
