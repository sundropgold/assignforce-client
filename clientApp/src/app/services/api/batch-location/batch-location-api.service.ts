import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '../../../model/Location';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BatchLocationApiService extends ApiService<Location> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.locationService.api;
    this.urls.get = environment.apiUrls.locationService.get;
    this.urls.update = environment.apiUrls.locationService.update;
    this.urls.remove = environment.apiUrls.locationService.remove;
    this.urls.create = environment.apiUrls.locationService.create;
  }
}
