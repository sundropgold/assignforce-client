import { TestBed, inject } from '@angular/core/testing';

import { TrainerService } from './trainer.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TrainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [TrainerService]
    });
  });

  it('should be created', inject([TrainerService], (service: TrainerService) => {
    expect(service).toBeTruthy();
  }));
});
