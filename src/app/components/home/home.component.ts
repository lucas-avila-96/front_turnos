import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToSpecialties() {
    this.router.navigate(['/specialties']);
  }

  navigateToMyAppointments() {
    this.router.navigate(['/my-appointments']);
  }
}
