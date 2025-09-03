import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Benefits } from '../models/benefits';

@Injectable({
  providedIn: 'root',
})
export class OurBenefitsService {
  configURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for benefits
  getAllBenefits(): Observable<Benefits[]> {
    return this.http.get<Benefits[]>(this.configURL + 'Benefit');
  }
}
