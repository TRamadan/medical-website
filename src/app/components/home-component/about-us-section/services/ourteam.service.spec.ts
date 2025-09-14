/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OurteamService } from './ourteam.service';

describe('Service: Ourteam', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurteamService]
    });
  });

  it('should ...', inject([OurteamService], (service: OurteamService) => {
    expect(service).toBeTruthy();
  }));
});
