import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisorboard } from '../../about-us-section/models/advisorboard';
import { Teammembers } from '../../about-us-section/models/teammembers';
@Injectable({
  providedIn: 'root',
})
export class OurteamService {
  configURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  //here is the function needed to get all added data for advisor board
  getAllAdvisorBoard(): Observable<Advisorboard[]> {
    return this.http.get<Advisorboard[]>(this.configURL + 'Advisorboard');
  }

  //here is the function needed to get all added data for our team members
  getAllTeamMembers(): Observable<Teammembers[]> {
    return this.http.get<Teammembers[]>(this.configURL + 'TeamMembers');
  }
}
