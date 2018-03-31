import { TestBed, inject } from '@angular/core/testing';

import { TrainerApiService } from './trainer-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TrainerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainerApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([TrainerApiService], (service: TrainerApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
