import { TestBed, inject } from '@angular/core/testing';

import { InMemDbService } from './in-mem-db.service';

describe('InMemDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemDbService]
    });
  });

  it(
    'should be created',
    inject([InMemDbService], (service: InMemDbService) => {
      expect(service).toBeTruthy();
    })
  );
});
