import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
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
import { BookingService } from './patient-form/services/booking.service';
import Swal from 'sweetalert2';

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
  @ViewChild(PatientFormComponent) patientFormComponent!: PatientFormComponent;

  selectedTimeSlot: any;
  selectedServiceAndLocation: any;
  confirmationData: any;

  bookingData: BookingData = {
    location: '',
    area: '',
    doctor: null,
    injuryType: '',
    appointmentDate: '',
    appointmentTime: '',
    patient: null,
  };

  steps: string[] = [];

  constructor(
    public elementRef: ElementRef,
    public translationService: TranslationService,
    private languageService: LanguageService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.updateSteps();
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

  get progress(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get progressRounded(): number {
    return Math.round(this.progress);
  }

  handleNext(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handlePrevious(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handleNextOrSubmit(): void {

    if (this.currentStep === 3) {
      this.patientFormComponent.onSubmit();
    } else {
      this.handleNext();
    }
  }

  // 🔹 Disable or enable the "Next" button based on step validity
  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        // Step 1: Must select location + service
        return !!this.selectedServiceAndLocation;
      case 2:
        // Step 2: Must select a time slot
        return !!this.selectedTimeSlot;
      case 3:
        // Step 3: Patient form handles validation internally
        return true;
      default:
        return true;
    }
  }

  isStepActive(stepIndex: number): boolean {
    return stepIndex + 1 <= this.currentStep;
  }

  updateBookingData(data: Partial<BookingData>): void {
    this.bookingData = { ...this.bookingData, ...data };
  }

  confirmBooking(bookingPayload: any): void {
    Swal.fire({
      title: this.translationService.translate('booking.loading.title'),
      text: this.translationService.translate('booking.loading.subtitle'),
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    this.bookingService.makeAnAppointment(bookingPayload).subscribe({
      next: (response: any) => {
        this.confirmationData = response.data;
        Swal.fire({
          icon: 'success',
          title: this.translationService.translate(
            'booking.confirmation.title'
          ),
          text: this.translationService.translate(
            'booking.confirmation.subtitle'
          ),
          confirmButtonText: this.translationService.translate(
            'booking.confirmation.okButton'
          ),
        }).then((result) => {
          if (result.isConfirmed) {
            this.handleNext();
          }
        });
      },
      error: (error: any) => {
        console.error('Booking failed', error);
        Swal.fire({
          icon: 'error',
          title: this.translationService.translate('booking.error.title'),
          text: this.translationService.translate('booking.error.text'),
          confirmButtonText: this.translationService.translate(
            'booking.error.okButton'
          ),
        });
      },
    });
  }

  onShowBookingForm(show: boolean) {
    this.showBookingFormFlag = show;
  }

  onServiceLocationSelected(locationService: any) {
    this.selectedServiceAndLocation = locationService;
    this.updateBookingData({
      location: locationService.locationName,
      area: locationService.serviceName, // adjust based on your data structure
    });
  }

  onTimeSlotSelected(slot: any) {
    this.selectedTimeSlot = slot;
    this.updateBookingData({
      appointmentDate: slot.date,
      appointmentTime: slot.time,
    });
  }

  // 🔹 Step 3: user submitted booking
  createBooking(bookingPayload: any): void {
    this.confirmBooking(bookingPayload);
  }
}
