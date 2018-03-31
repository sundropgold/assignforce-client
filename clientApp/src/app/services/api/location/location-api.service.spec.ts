import { TestBed, inject } from '@angular/core/testing';

import { LocationApiService } from './location-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LocationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([LocationApiService], (service: LocationApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
