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

interface TimeSlot {
  from: string;
  to: string;
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
  selectedTime: any = '';

  availableDatesWithTimes: { [key: string]: TimeSlot[] } = {
    '2024-06-15': [
      { from: '09:00', to: '09:30' },
      { from: '10:00', to: '10:30' },
      { from: '11:00', to: '11:30' },
      { from: '14:00', to: '14:30' },
      { from: '15:00', to: '15:30' },
    ],
    '2024-06-16': [
      { from: '08:00', to: '08:30' },
      { from: '09:00', to: '09:30' },
      { from: '10:00', to: '10:30' },
      { from: '13:00', to: '13:30' },
      { from: '14:00', to: '14:30' },
      { from: '16:00', to: '16:30' },
    ],
    '2024-06-17': [
      { from: '09:00', to: '09:30' },
      { from: '11:00', to: '11:30' },
      { from: '13:00', to: '13:30' },
      { from: '15:00', to: '15:30' },
      { from: '17:00', to: '17:30' },
    ],
    '2024-06-18': [
      { from: '08:00', to: '08:30' },
      { from: '10:00', to: '10:30' },
      { from: '11:00', to: '11:30' },
      { from: '14:00', to: '14:30' },
      { from: '15:00', to: '15:30' },
      { from: '16:00', to: '16:30' },
    ],
    '2024-06-19': [
      { from: '09:00', to: '09:30' },
      { from: '10:00', to: '10:30' },
      { from: '13:00', to: '13:30' },
      { from: '14:00', to: '14:30' },
      { from: '17:00', to: '17:30' },
    ],
    '2024-06-20': [
      { from: '08:00', to: '08:30' },
      { from: '09:00', to: '09:30' },
      { from: '11:00', to: '11:30' },
      { from: '15:00', to: '15:30' },
      { from: '16:00', to: '16:30' },
      { from: '17:00', to: '17:30' },
    ],
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

  get availableTimesForSelectedDate(): TimeSlot[] {
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

  // Updated component methods:
  onTimeSelect(timeSlot: TimeSlot): void {
    this.selectedTime = timeSlot;
  }

  isTimeSelected(timeSlot: TimeSlot): boolean {
    return (
      this.selectedTime?.from === timeSlot.from &&
      this.selectedTime?.to === timeSlot.to
    );
  }
}
