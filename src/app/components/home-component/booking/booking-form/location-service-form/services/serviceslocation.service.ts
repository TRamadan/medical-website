import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicecategory } from '../models/servicecategory';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services';

@Injectable({
  providedIn: 'root',
})
export class ServiceslocationService {
  private apiUrl = 'http://localhost:5000/api/ServiceCategories';
  private ServicesApiUrl = 'http://localhost:5000/api/Serivces';
  constructor(private http: HttpClient) {}

  /**
   * READ: Retrieves all service categories from the backend.
   */
  getServiceCategories(): Observable<Servicecategory[]> {
    return this.http.get<Servicecategory[]>(this.apiUrl);
  }

  /**
   * READ: Retrieves all services from the backend.
   */
  getServices(): Observable<Services[]> {
    return this.http.get<Services[]>(this.ServicesApiUrl);
  }
}
