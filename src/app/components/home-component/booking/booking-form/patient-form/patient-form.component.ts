import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

export interface PatientData {
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
export class PatientFormComponent implements OnInit {
  @Input() bookingData: BookingData = {};
  @Output() bookingDataChange = new EventEmitter<BookingData>();

  patientForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[0-9\s\-\(\)]{10,}$/)],
      ],
      dateOfBirth: ['', [Validators.required, this.ageValidator]],
      gender: ['', Validators.required],
      emergencyContact: [''],
      medicalHistory: [''],
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
    if (this.patientForm.valid) {
      console.log('Form submitted:', this.patientForm.value);
      // Handle form submission logic here
    }
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
        return `${this.getFieldLabel(fieldName)} is required`;
      if (field.errors['minlength'])
        return `${this.getFieldLabel(fieldName)} must be at least ${
          field.errors['minlength'].requiredLength
        } characters`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['pattern']) return 'Please enter a valid phone number';
      if (field.errors['minAge']) return 'You must be at least 16 years old';
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone Number',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
    };
    return labels[fieldName] || fieldName;
  }

  get isFormValid(): boolean {
    return this.patientForm.valid;
  }
}
