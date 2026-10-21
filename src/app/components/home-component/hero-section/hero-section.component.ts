import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

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

  scrollToBooking() {
    if (isPlatformBrowser(this.platformId)) {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
