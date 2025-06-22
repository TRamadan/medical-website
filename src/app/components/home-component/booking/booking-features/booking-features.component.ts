import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-booking-features',
  templateUrl: './booking-features.component.html',
  styleUrls: ['./booking-features.component.css'],
})
export class BookingFeaturesComponent implements OnInit, OnDestroy {
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
