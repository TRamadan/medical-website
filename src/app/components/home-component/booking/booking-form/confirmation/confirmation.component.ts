import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';

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
export class ConfirmationComponent implements OnInit, OnDestroy {
  @Input() bookingData!: BookingData;
  private languageSubscription?: Subscription;

  bookingReference: string;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {
    this.bookingReference = 'BK-' + Date.now().toString().slice(-6);
  }

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() => {
      // Component will automatically update when language changes
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  handleSendConfirmation(): void {
    // Simulate sending email confirmation
    alert(
      this.translationService.translate('booking.confirmation.emailSent')
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
