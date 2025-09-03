import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Methodology } from '../models/methodology';

@Injectable({
  providedIn: 'root',
})
export class MethodologyService {
  configURL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for methodology
  getAllMethodologies(): Observable<Methodology[]> {
    return this.http.get<Methodology[]>(this.configURL + 'Methodology');
  }
}
