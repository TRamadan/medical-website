import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { LocationServiceFormComponent } from './location-service-form/location-service-form.component';
import { ChooseTimeSlotComponent } from './choose-time-slot/choose-time-slot.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { BookingHowItWorksComponent } from '../booking-how-it-works/booking-how-it-works.component';
import { BookingFeaturesComponent } from '../booking-features/booking-features.component';

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  image: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  emergencyContact: string;
  medicalHistory: string;
}

export interface BookingData {
  location: string;
  area: string;
  doctor: Doctor | null;
  injuryType: string;
  appointmentDate: string;
  appointmentTime: string;
  patient: Patient | null;
}

@Component({
  standalone: true,
  imports: [
    LocationServiceFormComponent,
    ChooseTimeSlotComponent,
    PatientFormComponent,
    BookingHowItWorksComponent,
    BookingFeaturesComponent,
    ConfirmationComponent,
  ],
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit, OnDestroy {
  @Output() back = new EventEmitter<void>();
  currentStep: number = 1;
  totalSteps: number = 4;
  private languageSubscription?: Subscription;
  showBookingFormFlag: boolean = false;

  bookingData: BookingData = {
    location: '',
    area: '',
    doctor: null,
    injuryType: '',
    appointmentDate: '',
    appointmentTime: '',
    patient: null,
  };

  constructor(
    public elementRef: ElementRef,
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.updateSteps();

    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        this.updateSteps();
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateSteps(): void {
    this.steps = [
      this.translationService.translate('booking.form.steps.location'),
      this.translationService.translate('booking.form.steps.timeSlot'),
      this.translationService.translate('booking.form.steps.patientInfo'),
      this.translationService.translate('booking.form.steps.confirmation'),
    ];
  }

  steps: string[] = [
    'Choose location and service',
    'Pick your time slot',
    'Patient Info',
    'Confirmation',
  ];

  get progress(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get progressRounded(): number {
    return Math.round(this.progress);
  }

  onBack(): void {
    this.back.emit();
  }

  handleNext(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  handlePrevious(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.bookingData.location && this.bookingData.area);
      case 2:
        return !!(
          this.bookingData.doctor &&
          this.bookingData.appointmentDate &&
          this.bookingData.appointmentTime
        );
      case 3:
        return !!this.bookingData.patient;
      default:
        return true;
    }
  }

  setBookingDataFromPreviousStep(event: any): void {
    console.log(event);
  }

  isStepActive(stepIndex: number): boolean {
    return stepIndex + 1 <= this.currentStep;
  }

  updateBookingData(data: Partial<BookingData>): void {
    this.bookingData = { ...this.bookingData, ...data };
  }

  confirmBooking(): void {}

  onShowBookingForm(show: boolean) {
    this.showBookingFormFlag = show;
  }
}
