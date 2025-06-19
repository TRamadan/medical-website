import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookingHowItWorksComponent } from './booking-how-it-works/booking-how-it-works.component';
import { BookingFeaturesComponent } from './booking-features/booking-features.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  imports: [
    BookingFormComponent,
    BookingHowItWorksComponent,
    BookingFeaturesComponent,
  ],
})
export class BookingComponent implements OnInit {
  showBookingForm = false;
  @ViewChild(BookingFormComponent) bookingFormComponent?: BookingFormComponent;

  private shouldScrollToBooking = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBooking && this.bookingFormComponent) {
      const nativeElement = this.bookingFormComponent.elementRef.nativeElement;

      nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      this.shouldScrollToBooking = false;
    }
  }

  retryLoadingBookingForm(): void {
    this.showBookingForm = false;

    setTimeout(() => {
      this.showBookingForm = true;
    }, 100);
  }

  startBookingProcess(): void {
    this.showBookingForm = true;
    this.shouldScrollToBooking = true;
  }
}
