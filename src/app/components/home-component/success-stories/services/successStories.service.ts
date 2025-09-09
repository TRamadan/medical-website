import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuccessStories } from '../models/success-stories';

@Injectable({
  providedIn: 'root',
})
export class SuccessStoriesService {
  configURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for partners
  getAllSuccessStories(): Observable<SuccessStories[]> {
    return this.http.get<SuccessStories[]>(this.configURL + 'SuccessStory');
  }
}
