import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  image: string;
  availableDates: string[];
  timeSlots: string[];
}

interface BookingData {
  location?: string;
  area?: string;
  doctor?: Doctor;
  appointmentDate?: string;
  appointmentTime?: string;
}
@Component({
  standalone: true,
  imports: [],
  selector: 'app-choose-time-slot',
  templateUrl: './choose-time-slot.component.html',
  styleUrls: ['./choose-time-slot.component.css'],
})
export class ChooseTimeSlotComponent implements OnInit {
  @Input() bookingData: BookingData = {};
  @Output() bookingDataChange = new EventEmitter<BookingData>();

  selectedDate: string = '';
  selectedTime: string = '';

  availableDatesWithTimes: { [key: string]: string[] } = {
    '2024-06-15': ['09:00', '10:00', '11:00', '14:00', '15:00'],
    '2024-06-16': ['08:00', '09:00', '10:00', '13:00', '14:00', '16:00'],
    '2024-06-17': ['09:00', '11:00', '13:00', '15:00', '17:00'],
    '2024-06-18': ['08:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    '2024-06-19': ['09:00', '10:00', '13:00', '14:00', '17:00'],
    '2024-06-20': ['08:00', '09:00', '11:00', '15:00', '16:00', '17:00'],
  };

  constructor() {}

  ngOnInit() {}

  handleDoctorSelect(doctor: Doctor): void {
    this.bookingData = {
      ...this.bookingData,
      doctor: doctor,
      appointmentDate: this.selectedDate,
      appointmentTime: this.selectedTime,
    };
    this.bookingDataChange.emit(this.bookingData);
  }

  onDateSelect(date: string): void {
    this.selectedDate = date;
    this.selectedTime = ''; // Reset time when date changes
  }

  onTimeSelect(time: string): void {
    this.selectedTime = time;
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  get availableDates(): string[] {
    return Object.keys(this.availableDatesWithTimes);
  }

  get availableTimesForSelectedDate(): string[] {
    if (!this.selectedDate) {
      return [];
    }
    return this.availableDatesWithTimes[this.selectedDate] || [];
  }

  isDoctorSelected(doctor: Doctor): boolean {
    return this.bookingData.doctor?.id === doctor.id;
  }

  isDateSelected(date: string): boolean {
    return this.selectedDate === date;
  }

  isTimeSelected(time: string): boolean {
    return this.selectedTime === time;
  }
}
