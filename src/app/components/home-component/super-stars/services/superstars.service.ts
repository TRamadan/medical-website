import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { SuperstarAthelete } from '../models/superstars';

@Injectable({
  providedIn: 'root',
})
export class SuperstarsService {
  configURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for super stars
  getAllSuperStars(): Observable<SuperstarAthelete[]> {
    return this.http.get<SuperstarAthelete[]>(
      this.configURL + 'SuperstarAthlete'
    );
  }
}
