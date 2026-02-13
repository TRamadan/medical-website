import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';

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

  imports: [FormsModule, ReactiveFormsModule, TitleComponentComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  isSubmitting = false;
  private languageSubscription?: Subscription;

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

  constructor(
    private formBuilder: FormBuilder,
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.updateContactInfo();
    this.updateSubjectOptions();

    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        this.updateContactInfo();
        this.updateSubjectOptions();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateContactInfo(): void {
    this.contactInfo = [
      {
        icon: 'fa fa-phone',
        title: this.translationService.translate('contact.phone.title'),
        description: this.translationService.translate(
          'contact.phone.description'
        ),
        details: [
          '+1 (555) 123-4567',
          this.translationService.translate('contact.phone.hours'),
        ],
      },
      {
        icon: 'fa fa-envelope',
        title: this.translationService.translate('contact.email.title'),
        description: this.translationService.translate(
          'contact.email.description'
        ),
        details: ['info@healthrecovery.com', 'support@healthrecovery.com'],
      },
      {
        icon: 'fa fa-map-location',
        title: this.translationService.translate('contact.address.title'),
        description: this.translationService.translate(
          'contact.address.description'
        ),
        details: ['123 Health Street', 'Recovery City, RC 12345'],
      },
    ];
  }

  private updateSubjectOptions(): void {
    this.subjectOptions = [
      {
        value: 'general',
        label: this.translationService.translate('contact.subjects.general'),
      },
      {
        value: 'appointment',
        label: this.translationService.translate(
          'contact.subjects.appointment'
        ),
      },
      {
        value: 'technical',
        label: this.translationService.translate('contact.subjects.technical'),
      },
      {
        value: 'billing',
        label: this.translationService.translate('contact.subjects.billing'),
      },
      {
        value: 'partnership',
        label: this.translationService.translate(
          'contact.subjects.partnership'
        ),
      },
      {
        value: 'media',
        label: this.translationService.translate('contact.subjects.media'),
      },
      {
        value: 'feedback',
        label: this.translationService.translate('contact.subjects.feedback'),
      },
    ];
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;


      // Here you would typically send the data to your backend
      setTimeout(() => {
        this.isSubmitting = false;
        alert(this.translationService.translate('contact.successMessage'));
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
        return this.translationService.translate('form.errors.required', {
          field: this.getFieldLabel(fieldName),
        });
      }
      if (field.errors['email']) {
        return this.translationService.translate('form.errors.email');
      }
      if (field.errors['minlength']) {
        return this.translationService.translate('form.errors.minlength', {
          field: this.getFieldLabel(fieldName),
        });
      }
    }
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: this.translationService.translate('form.name'),
      email: this.translationService.translate('form.email'),
      phone: this.translationService.translate('form.phone'),
      subject: this.translationService.translate('form.subject'),
      message: this.translationService.translate('form.message'),
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
}
