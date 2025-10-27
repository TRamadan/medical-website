import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkingdaysService {
  private apiUrl =
    'http://localhost:5000/api/Appointments/GetAvailableSlotsWithinMoth?';

  constructor(private http: HttpClient) {}

  //here is the function needed to update the calendar
  getWorkingDaysWithinMonth(
    locationId: number,
    serviceId: number,
    MonthNumber: number
  ): any {
    return this.http.get(
      this.apiUrl +
        `locationId=${locationId}&serviceId=${serviceId}&MonthNumber=${MonthNumber}`
    );
  }
}
