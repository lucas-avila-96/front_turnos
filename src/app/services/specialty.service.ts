import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private apiUrl = `${environment.apiBaseUrl}/specialties`;
  constructor(private http: HttpClient) { }

  getSpecialties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
