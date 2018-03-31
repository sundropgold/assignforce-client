import { TestBed, inject } from '@angular/core/testing';

import { BuildingApiService } from './building-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BuildingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([BuildingApiService], (service: BuildingApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
