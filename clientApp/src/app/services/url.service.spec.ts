import { TestBed, inject } from '@angular/core/testing';

import { UrlService } from './url.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UrlServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [UrlService]
    });
  });

  it('should be created', inject([UrlService], (service: UrlService) => {
    expect(service).toBeTruthy();
  }));
});
