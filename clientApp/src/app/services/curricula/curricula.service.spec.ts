import { TestBed, inject } from '@angular/core/testing';

import { CurriculaService } from './curricula.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurriculaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurriculaService]
    });
  });

  it(
    'should be created',
    inject([CurriculaService], (service: CurriculaService) => {
      expect(service).toBeTruthy();
    })
  );
});
