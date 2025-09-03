import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuttingEdgeTechnology } from '../models/cuttingEdgeTechnology';

@Injectable({
  providedIn: 'root',
})
export class CuttingEdgeTechnologyService {
  configURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for cutting edge technology
  getAllCuttingEdgeTechnology(): Observable<CuttingEdgeTechnology[]> {
    return this.http.get<CuttingEdgeTechnology[]>(
      this.configURL + 'CuttingEdgeTechnology'
    );
  }
}
