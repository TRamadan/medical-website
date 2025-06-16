import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit() {}

  retryLoadingBookingForm(): void {
    this.showBookingForm = false;

    setTimeout(() => {
      this.showBookingForm = true;
    }, 100);
  }

  startBookingProcess(): void {
    this.showBookingForm = true;
  }
}
