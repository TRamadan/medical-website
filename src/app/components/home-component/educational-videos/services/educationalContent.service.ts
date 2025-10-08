import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Category } from '../models/education';

@Injectable({
  providedIn: 'root',
})
export class EducationalContentService {
  configURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Fetches all educational content categories from the API.
   * @returns An observable of an array of Category objects.
   */
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.configURL + 'EducationCategory');
  }

  /**
   * Fetches all educational content (articles and videos) from the API.
   * @returns An observable of an array of educational content items.
   */
  getAllEducationalContent(): Observable<any[]> {
    return this.http.get<any[]>(this.configURL + 'EducationalContent');
  }

  /**
   * Fetches educational content filtered by a specific category ID.
   * @param categoryId The ID of the category to filter by.
   * @returns An observable of an array of educational content items belonging to the specified category.
   */
  getEducationalContentByCategory(categoryId: string): Observable<any[]> {
    const params = new HttpParams().set('categoryId', categoryId);
    return this.http.get<any[]>(
      this.configURL + 'EducationalContent/ByCategory',
      { params }
    );
  }
}
