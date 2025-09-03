import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partners } from '../models/partners';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  configURL = environment.apiUrl;


  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for partners
  getAllPartners(): Observable<Partners[]> {

    return this.http.get<Partners[]>(this.configURL + 'Partner');
  }
}
