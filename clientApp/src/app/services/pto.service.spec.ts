import { TestBed, inject } from '@angular/core/testing';

import { PtoService } from './pto.service';

describe('PtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PtoService]
    });
  });

  it('should be created', inject([PtoService], (service: PtoService) => {
    expect(service).toBeTruthy();
  }));
});
