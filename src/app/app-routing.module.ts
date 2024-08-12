import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { SpecialtyListComponent } from './components/specialty-list/specialty-list.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'specialties/:id/doctors', component: DoctorListComponent },
  { path: 'specialties', component: SpecialtyListComponent },
  { path: 'appointments/new', component: AppointmentFormComponent },
  { path: 'my-appointments', component: MyAppointmentsComponent },
  { path: '**', redirectTo: '' } // Redirige a la ruta principal en caso de no coincidir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
