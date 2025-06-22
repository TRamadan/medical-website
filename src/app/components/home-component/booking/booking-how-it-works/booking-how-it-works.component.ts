import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-booking-how-it-works',
  templateUrl: './booking-how-it-works.component.html',
  styleUrls: ['./booking-how-it-works.component.css'],
})
export class BookingHowItWorksComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
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
}
