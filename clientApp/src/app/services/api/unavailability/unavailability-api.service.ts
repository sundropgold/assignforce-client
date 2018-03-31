import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Unavailability } from '../../../model/Unavailability';

@Injectable()
export class UnavailabilityApiService extends ApiService<Unavailability> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.unavailableService.api;
    this.urls.get = environment.apiUrls.unavailableService.get;
    this.urls.update = environment.apiUrls.unavailableService.update;
    this.urls.remove = environment.apiUrls.unavailableService.remove;
    this.urls.create = environment.apiUrls.unavailableService.create;
  }
}
