import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextareaModule } from 'primeng/inputtextarea';
interface ContactInfo {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    InputTextareaModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  contactInfo: ContactInfo[] = [
    {
      icon: 'fa fa-phone',
      title: 'Phone',
      description: 'Call us directly',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM EST'],
    },
    {
      icon: 'fa fa-envelope',
      title: 'Email',
      description: 'Send us an email',
      details: ['info@healthrecovery.com', 'support@healthrecovery.com'],
    },
    {
      icon: 'fa fa-map-location',
      title: 'Address',
      description: 'Visit our office',
      details: ['123 Health Street', 'Recovery City, RC 12345'],
    },
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'fa fa-facebook',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'fa fa-youtube',
    },

    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'fa fa-instagram',
    },
  ];

  subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'appointment', label: 'Appointment Question' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'media', label: 'Media/Press Inquiry' },
    { value: 'feedback', label: 'Feedback' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simulate form submission
      console.log('Form submitted:', this.contactForm.value);

      // Here you would typically send the data to your backend
      setTimeout(() => {
        this.isSubmitting = false;
        alert('Thank you for your message! We will get back to you soon.');
        this.contactForm.reset();
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} is too short`;
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
