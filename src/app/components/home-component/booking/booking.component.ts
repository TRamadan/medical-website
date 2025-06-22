import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BookingHowItWorksComponent } from './booking-how-it-works/booking-how-it-works.component';
import { BookingFeaturesComponent } from './booking-features/booking-features.component';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [
    BookingHowItWorksComponent,
    BookingFeaturesComponent,
  ],
})
export class BookingComponent implements OnInit, OnDestroy {
  showBookingForm = false;
  private languageSubscription?: Subscription;

  private shouldScrollToBooking = false;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private router: Router
  ) { }

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




  startBookingProcess(): void {
    this.router.navigate(['/bookappointment']);
  }
}
