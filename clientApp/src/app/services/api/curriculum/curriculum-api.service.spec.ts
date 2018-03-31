import { TestBed, inject } from '@angular/core/testing';

import { CurriculumApiService } from './curriculum-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CurriculumApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurriculumApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([CurriculumApiService], (service: CurriculumApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
