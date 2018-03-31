import { TestBed, inject } from '@angular/core/testing';

import { UnavailabilityApiService } from './unavailability-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UnavailabilityApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnavailabilityApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([UnavailabilityApiService], (service: UnavailabilityApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
