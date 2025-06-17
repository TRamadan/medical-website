import { Component, Input, OnInit } from '@angular/core';
export interface Doctor {
  name: string;
  specialty: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

export interface BookingData {
  doctor: Doctor;
  area: string;
  location: string;
  appointmentDate: string;
  appointmentTime: string;
  injuryType: string;
  patient: Patient;
}
@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  @Input() bookingData!: BookingData;

  bookingReference: string;

  constructor() {
    this.bookingReference = 'BK-' + Date.now().toString().slice(-6);
  }

  handleSendConfirmation(): void {
    // Simulate sending email confirmation
    alert(
      'Confirmation Email Sent!\nتم إرسال إيميل التأكيد مع رابط تحميل التطبيق إلى بريدك الإلكتروني'
    );
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  downloadApp(): void {
    // Handle app download
    console.log('Download app');
  }
}
