import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Building } from '../../../model/Building';

@Injectable()
export class BuildingApiService extends ApiService<Building> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.buildingService.api;
    this.urls.get = environment.apiUrls.buildingService.get;
    this.urls.update = environment.apiUrls.buildingService.update;
    this.urls.remove = environment.apiUrls.buildingService.remove;
    this.urls.create = environment.apiUrls.buildingService.create;
  }
}
