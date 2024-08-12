// doctor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: any[] = [];
  specialtyId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) {
    this.specialtyId = 0;
  }

  ngOnInit(): void {
    this.specialtyId = +this.route.snapshot.paramMap.get('id')!;
    this.doctorService.getDoctorsBySpecialty(this.specialtyId).subscribe((data: any[]) => {
      this.doctors = data;
    });
  }

  selectDoctor(doctorId: number): void {
    this.router.navigate(['/appointments/new'], { queryParams: { doctorId: doctorId } });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
