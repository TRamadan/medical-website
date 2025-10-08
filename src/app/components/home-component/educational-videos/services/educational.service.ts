import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationalService {
  private http = inject(HttpClient);
  private readonly configURL = environment.apiUrl;

  /**
   * Retrieves all educational categories from the API.
   */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.configURL}EducationCategory`);
  }
}
