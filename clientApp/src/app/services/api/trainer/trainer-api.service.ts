import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Trainer } from '../../../model/Trainer';

@Injectable()
export class TrainerApiService extends ApiService<Trainer> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.trainerService.api;
    this.urls.get = environment.apiUrls.trainerService.get;
    this.urls.update = environment.apiUrls.trainerService.update;
    this.urls.remove = environment.apiUrls.trainerService.remove;
    this.urls.create = environment.apiUrls.trainerService.create;
  }
}
