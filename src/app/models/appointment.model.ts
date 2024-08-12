// src/app/models/appointment.model.ts
export class Appointment {
    constructor(
      public doctor_id: number,
      public patient_id: number,
      public appointment_date: string
    ) {}
  }
  