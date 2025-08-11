import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';

@Component({
  standalone: true,
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
  imports: [TitleComponentComponent],
})
export class HowItWorksComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;
  private intervalId: any;

  currentStep = 0;
  private stepInterval: any;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  steps = [
    {
      icon: 'bi-calendar-check step-icon',
      title: 'Book an Appointment',
      titleAr: '',
      descriptionAr: '',
      description:
        'Scheduale your first consultation through our website or mobie app.',
    },
    {
      icon: 'bi-clipboard-check step-icon',
      title: 'Initial Assessment',
      titleAr: '',
      descriptionAr: '',
      description:
        'Our Specialities will evaluate your condition and cease a professional treatment plan.',
    },
    {
      icon: 'bi bi-phone step-icon',
      title: 'Download the App',
      titleAr: '',
      descriptionAr: '',
      description:
        'Get our mobile app to access your treatment plan, excercies and track your progress',
    },
    {
      icon: 'bi-graph-up-arrow step-icon',
      title: 'Follow Your Plan',
      titleAr: '',
      descriptionAr: '',
      description:
        'Complete your prescribed excercies and track your recovery journey.',
    },
    {
      icon: 'bi-chat-dots step-icon',
      title: 'Get Feedback',
      titleAr: '',
      descriptionAr: '',
      description: 'Receive real-time feedback from our experts.',
    },
  ];

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        // Component will automatically update when language changes
      }
    );
    this.startAutoAnimation();
  }

  startAutoAnimation() {
    this.stepInterval = setInterval(() => {
      this.currentStep = (this.currentStep + 1) % this.steps.length;
    }, 3000); // 2 seconds per step
  }

  ngOnDestroy() {
    clearInterval(this.stepInterval);

    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
