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
  imports: [FormsModule, CommonModule],
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

  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  calendarDays: any[] = [];
  selectedDate: string | null = null; // single selected date

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear - 5; y <= currentYear + 5; y++) {
      this.years.push(y);
    }
    this.generateCalendar();
  }

  formatDateLocal(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  generateCalendar() {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
    const lastDay = new Date(this.selectedYear, this.selectedMonth + 1, 0);
    const days: any[] = [];

    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    // Previous month's days
    for (let i = 0; i < startDay; i++) {
      const date = new Date(
        this.selectedYear,
        this.selectedMonth,
        -(startDay - 1 - i)
      );
      days.push({
        day: date.getDate(),
        dateString: this.formatDateLocal(date),
        isCurrentMonth: false,
      });
    }

    // Current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.selectedYear, this.selectedMonth, i);
      days.push({
        day: i,
        dateString: this.formatDateLocal(date),
        isCurrentMonth: true,
      });
    }

    // Next month's days
    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        const date = new Date(this.selectedYear, this.selectedMonth + 1, i);
        days.push({
          day: date.getDate(),
          dateString: this.formatDateLocal(date),
          isCurrentMonth: false,
        });
      }
    }

    this.calendarDays = days;
  }

  updateCalendar() {
    this.generateCalendar();
  }

  prevMonth() {
    if (this.selectedMonth === 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else {
      this.selectedMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.selectedMonth === 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    } else {
      this.selectedMonth++;
    }
    this.generateCalendar();
  }

  selectDate(day: any) {
    if (!day.isCurrentMonth) return;
    this.selectedDate = day.dateString;
    console.log(this.selectedDate);
  }

  ngOnDestroy() {}
}
