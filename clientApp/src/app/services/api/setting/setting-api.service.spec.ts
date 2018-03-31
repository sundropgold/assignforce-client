import { TestBed, inject } from '@angular/core/testing';

import { SettingApiService } from './setting-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SettingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingApiService, HttpClient, HttpHandler]
    });
  });

  it(
    'should be created',
    inject([SettingApiService], (service: SettingApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
