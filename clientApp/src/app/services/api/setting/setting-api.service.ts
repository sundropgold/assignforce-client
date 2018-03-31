import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Setting } from '../../../model/Setting';

@Injectable()
export class SettingApiService extends ApiService<Setting> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.settingsService.api;
    this.urls.get = environment.apiUrls.settingsService.get;
    this.urls.update = environment.apiUrls.settingsService.update;
    this.urls.remove = environment.apiUrls.settingsService.remove;
    this.urls.create = environment.apiUrls.settingsService.create;
  }
}
