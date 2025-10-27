import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WorkingdaysService } from './services/workingdays.service';

interface BookingData {
  location?: string;
  area?: string;
  doctor?: any;
  appointmentDate?: string;
  appointmentTime?: string;
}

interface TimeSlot {
  from: string;
  to: string;
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  selector: 'app-choose-time-slot',
  templateUrl: './choose-time-slot.component.html',
  styleUrls: ['./choose-time-slot.component.css'],
})
export class ChooseTimeSlotComponent implements OnInit, OnDestroy {
  @Input() bookingData: BookingData = {};
  @Output() bookingDataChange = new EventEmitter<BookingData>();
  private languageSubscription?: Subscription;

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = [];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  selectedMonth = new Date().getMonth() + 1; // 1-based month
  selectedYear = new Date().getFullYear();
  calendarDays: any[] = [];
  selectedDate: string | null = null;

  availableDays: string[] = [];

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private _workingDaysService: WorkingdaysService
  ) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear - 5; y <= currentYear + 5; y++) {
      this.years.push(y);
    }

    this.fetchAvailableDays();
  }

  // Fetch available days from API
  fetchAvailableDays() {
    const locationServicedata = JSON.parse(
      localStorage.getItem('bookingData') || ''
    );
    this._workingDaysService
      .getWorkingDaysWithinMonth(
        locationServicedata.locationId,
        locationServicedata.serviceId,
        this.selectedMonth
      )
      .subscribe({
        next: (res: any) => {
          debugger;
          this.availableDays = res?.data || [];
          this.generateCalendar(); // generate after getting data
        },
        error: (err: any) => {
          this.availableDays = [];
          this.generateCalendar();
        },
      });
  }

  formatDateLocal(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  generateCalendar() {
    const jsMonth = this.selectedMonth - 1;
    const firstDay = new Date(this.selectedYear, jsMonth, 1);
    const lastDay = new Date(this.selectedYear, jsMonth + 1, 0);
    const days: any[] = [];

    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    // Previous month's days
    for (let i = 0; i < startDay; i++) {
      const date = new Date(this.selectedYear, jsMonth, -(startDay - 1 - i));
      const dateString = this.formatDateLocal(date);
      days.push({
        day: date.getDate(),
        dateString,
        isCurrentMonth: false,
        isAvailable: false,
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.selectedYear, jsMonth, i);
      const dateString = this.formatDateLocal(date);
      days.push({
        day: i,
        dateString,
        isCurrentMonth: true,
        // ✅ Mark day as available only if it's in API response
        isAvailable: this.availableDays.includes(dateString),
      });
    }

    // Next month's days
    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(this.selectedYear, jsMonth + 1, i);
        const dateString = this.formatDateLocal(date);
        days.push({
          day: date.getDate(),
          dateString,
          isCurrentMonth: false,
          isAvailable: false,
        });
      }
    }

    this.calendarDays = days;
  }

  updateCalendar() {
    console.log('Selected month:', this.selectedMonth);
    this.fetchAvailableDays(); // ✅ refetch data when month changes
  }

  prevMonth() {
    if (this.selectedMonth === 1) {
      this.selectedMonth = 12;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.fetchAvailableDays();
  }

  nextMonth() {
    if (this.selectedMonth === 12) {
      this.selectedMonth = 1;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.fetchAvailableDays();
  }

  selectDate(day: any) {
    if (!day.isCurrentMonth || !day.isAvailable) return;
    this.selectedDate = day.dateString;
    console.log('✅ Selected date:', this.selectedDate);
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }
}
