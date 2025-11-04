import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';

export interface AppointmentDetails {
  locationNameAr: string;
  locationNameEn: string;
  from: string;
  to: string;
}

export interface PatientInfo {
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

export interface BookingData {
  appointmentDetails: AppointmentDetails;
  patientInfo: PatientInfo;
}

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  @Input() confirmationData!: any;
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
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        // Component will automatically update when language changes
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  handleSendConfirmation(): void {
    // Simulate sending email confirmation
    alert(this.translationService.translate('booking.confirmation.emailSent'));
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
