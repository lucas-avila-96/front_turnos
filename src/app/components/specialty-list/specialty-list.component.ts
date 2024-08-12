import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router para la navegación
import { SpecialtyService } from '../../services/specialty.service';  // Asegúrate de que el servicio exista

@Component({
  selector: 'app-specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {
  specialties: any[] = [];  // Array para almacenar las especialidades

  constructor(private specialtyService: SpecialtyService, private router: Router) {}

  ngOnInit(): void {
    this.getSpecialties();  // Llama a la función para cargar las especialidades
  }

  getSpecialties(): void {
    this.specialtyService.getSpecialties().subscribe(
      (data: any[]) => {
        this.specialties = data;
      },
      (error) => {
        console.error('Error al cargar las especialidades', error);
      }
    );
  }

  selectSpecialty(specialtyId: number): void {
    this.router.navigate(['/specialties', specialtyId, 'doctors']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
