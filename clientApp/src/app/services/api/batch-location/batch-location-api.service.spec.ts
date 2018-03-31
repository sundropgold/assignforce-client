import { TestBed, inject } from '@angular/core/testing';

import { BatchLocationApiService } from './batch-location-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BatchLocationApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchLocationApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([BatchLocationApiService], (service: BatchLocationApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
