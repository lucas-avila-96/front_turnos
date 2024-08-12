import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { SpecialtyListComponent } from './components/specialty-list/specialty-list.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentFormComponent,
    DoctorListComponent,
    SpecialtyListComponent,
    MyAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
