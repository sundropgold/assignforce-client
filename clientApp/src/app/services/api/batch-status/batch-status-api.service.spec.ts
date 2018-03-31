import { TestBed, inject } from '@angular/core/testing';

import { BatchStatusApiService } from './batch-status-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BatchStatusApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchStatusApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([BatchStatusApiService], (service: BatchStatusApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
