import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

export interface PatientData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  emergencyContact: string;
  medicalHistory: string;
  favoriteSport: string;
}

export interface BookingData {
  patient?: PatientData;
  [key: string]: any;
}

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent implements OnInit, OnDestroy {
  @Input() bookingData: BookingData = {};
  @Input() selectedSlot: any;
  @Output() bookingDataChange = new EventEmitter<BookingData>();
  private languageSubscription?: Subscription;

  isSubmitting = false;
  patientForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
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

  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[0-9\s\-\(\)]{10,}$/)],
      ],
      dateOfBirth: ['', [Validators.required, this.ageValidator]],
      genderId: ['', Validators.required],
      emergencyContact: [''],
      medicalHistory: [''],
      favoriteSport: [''],
    });

    // Subscribe to form changes to update booking data
    this.patientForm.valueChanges.subscribe((value) => {
      this.updateBookingData(value);
    });
  }

  // Custom validator for age (must be at least 16 years old)
  ageValidator(control: any) {
    if (!control.value) return null;

    const today = new Date();
    const birthDate = new Date(control.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= 16 ? null : { minAge: true };
  }

  updateBookingData(formValue: PatientData): void {
    const updatedBookingData = {
      ...this.bookingData,
      patient: formValue,
    };
    this.bookingDataChange.emit(updatedBookingData);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.patientForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const locationServiceData = JSON.parse(
      localStorage.getItem('bookingData') || '{}'
    );
    const formValue = this.patientForm.value;

    const requestBody = {
      doctorId: this.selectedSlot.doctorId,
      patientId: 0,
      serviceId: locationServiceData.serviceId || 0,
      locationId: locationServiceData.locationId || 0,
      startTime: '',
      endTime: '',
      appointmentProfile: {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        phoneNumber: formValue.phone,
        emergencyPhoneNumber: formValue.emergencyContact,
        genderId: formValue.gender === 'male' ? 1 : 2,
        dateOfBirth: formValue.dateOfBirth,
        medicaHistory: formValue.medicalHistory,
        favoriteSport: formValue.favoriteSport,
        address: '',
        interestedServiceId: locationServiceData.serviceId || 0,
      },
      isAnonymousPatient: true,
    };

    // this.bookingService.createBooking(requestBody).subscribe({
    //   next: (response: any) => {
    //     this.isSubmitting = false;
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Booking Confirmed!',
    //       text: 'Your appointment has been successfully booked.',
    //     });
    //   },
    //   error: (error) => {
    //     this.isSubmitting = false;
    //     console.error('Booking failed', error);
    //   },
    // });
  }

  // Helper methods for template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.patientForm.get(fieldName);
    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched || this.submitted)
    );
  }

  getFieldError(fieldName: string): string {
    const field = this.patientForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required'])
        return this.translationService.translate(
          'booking.patientForm.errors.required',
          { field: this.getFieldLabel(fieldName) }
        );
      if (field.errors['minlength'])
        return this.translationService.translate(
          'booking.patientForm.errors.minlength',
          { field: this.getFieldLabel(fieldName) }
        );
      if (field.errors['email'])
        return this.translationService.translate(
          'booking.patientForm.errors.email'
        );
      if (field.errors['pattern'])
        return this.translationService.translate(
          'booking.patientForm.errors.phone'
        );
      if (field.errors['minAge'])
        return this.translationService.translate(
          'booking.patientForm.errors.minAge'
        );
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    return this.translationService.translate(
      `booking.patientForm.fields.${fieldName}`
    );
  }

  get isFormValid(): boolean {
    return this.patientForm.valid;
  }
}
