import { TestBed, inject } from '@angular/core/testing';

import { ApiUrlBuilderService } from './api-url-builder.service';

describe('ApiUrlBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUrlBuilderService]
    });
  });

  it(
    'should be created',
    inject([ApiUrlBuilderService], (service: ApiUrlBuilderService) => {
      expect(service).toBeTruthy();
    })
  );
});
