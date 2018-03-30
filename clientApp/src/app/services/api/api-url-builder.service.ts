import { Injectable } from '@angular/core';
import { GetApiUrlService } from './getApiUrl.service';
import { Setting } from '../../model/setting';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiUrlBuilderService {
  constructor(private apiUrlService: GetApiUrlService, private http: HttpClient) {}

  private baseUrl = 'https://assignforceback.cfapps.io';

  private addressControllerApi = {
    baseUrl: '/address',
    create: '/vp/location/create',
    update: '/vp/location/update',
    remove: '/vp/location/delete',
    all: '/all/location/all',
    reactivate: '/vp/location/reactivate'
  };

  private buildingControllerApi = {
    baseUrl: '/api/v2/building',
    create: '/',
    retrieve: '/',
    update: '/',
    remove: '/',
    all: '/'
  };

  private locationControllerApi = {
    baseUrl: '/api/v2/location',
    create: '/',
    retrieve: '/',
    update: '/',
    remove: '/',
    all: '/'
  };

  private roomControllerApi = {
    baseUrl: '/api/v2/room',
    create: '/',
    retrieve: '/',
    update: '/',
    remove: '/',
    all: '/'
  };
}
