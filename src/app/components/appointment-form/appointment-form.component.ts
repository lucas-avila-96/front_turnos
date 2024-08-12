// appointment-form.component.ts
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  patient: Patient = new Patient("", "", "");
  appointmentDate: string = '';
  selectedDoctorId: number;

  notificationMessage: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.selectedDoctorId = +this.route.snapshot.queryParamMap.get('doctorId')!;
  }

  onSubmit(): void {
    const appointmentData = {
      doctor_id: this.selectedDoctorId,
      appointment_date: this.appointmentDate,
      patient: {
        dni: this.patient.dni,
        firstName: this.patient.firstName,
        lastName: this.patient.lastName
      }
    };
    console.log('Datos de la cita:', appointmentData);
    this.appointmentService.createAppointment(appointmentData).subscribe(
      response => {
        this.showNotification('Turno generado con éxito', true);
      },
      error => {
        this.showNotification('Error al generar el turno: ', false);
      }
    );
  }

  private showNotification(message: string, success: boolean) {
    this.notificationMessage = message;
    this.isSuccess = success;
    this.isError = !success;

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      this.notificationMessage = '';
    }, 5000);
  }

  navigateToMyAppointments() {
    this.router.navigate(['/my-appointments']);
  }
}
