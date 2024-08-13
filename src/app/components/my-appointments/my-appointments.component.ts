import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
  
})
export class MyAppointmentsComponent {
  dni: string = '';
  appointments: any[] = [];
  dniControl = new FormControl();
  showDeleteMessage: boolean = false;


  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) {}


  onSearchClick(): void {
    const dni = this.dniControl.value;
    if (dni && dni.length === 8) { // Verifica si el DNI tiene la longitud correcta (ajusta si es necesario)
      this.searchAppointments(dni);
    } else {
      // Opcional: Mostrar un mensaje de error si el DNI no es válido
      console.error('El DNI debe tener 8 caracteres.');
    }
  }
  
  searchAppointments(dni: string): void {
    if (dni) {
      this.appointmentService.getAppointmentsByDni(dni).subscribe(
        (data: any[]) => {
          this.appointments = data;
        },
        (error) => {
          console.error('Error al buscar turnos:', error);
        }
      );
    }
  }

  onRescheduleClick(appointment: any): void {
    const newDate = prompt('Ingrese la nueva fecha (YYYY-MM-DD):', appointment.appointmentDate);
    if (newDate) {
      this.appointmentService.rescheduleAppointment(appointment.id, newDate).subscribe(() => {
        alert('Turno reprogramado');
        this.searchAppointments(this.dniControl.value);
      });
    }
  }


  onDeleteClick(appointmentId: number) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe(() => {
      this.showDeleteMessage = true;
      this.searchAppointments(this.dniControl.value);

      setTimeout(() => {
        this.showDeleteMessage = false;
      }, 5000);
    });
  }

  deleteAppointment(appointmentId: number) {
    this.appointmentService.deleteAppointment(appointmentId)
    }

  goToHome() {
    this.router.navigate(['/']);
  }
  
}

