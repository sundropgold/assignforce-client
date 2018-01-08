import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalSettings} from '../domain/global-settings';
import {UrlService} from './url.service';

@Injectable()
export class SettingsService {
   setting = {
    settingId:  1,
    trainersPerPage: 13,
    reportGrads: 40,
    batchLength: 10,
    reportIncomingGrads: 13,
    minBatchSize: 10,
    maxBatchSize: 19,
    trainerBreakDays: 14,
    defaultLocation: 3,
    defaultBuilding: 242,
    defaultNamePattern: '$y$m $mmm$d $c',
 };
  url = this.urlService.getUrl() + '/api/settings/api/v2/setting';

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  // Gets all settings, open up possibilities for future development
  // getSettings(): Observable<GlobalSettings[]> {
  //   return this.http.get<GlobalSettings[]>(`${this.url}`);
  //
  // }

  getSettings() {
    //return this.http.get<GlobalSettings[]>(`${this.url}`);
    return this.setting;
  }

  // Updates settings
  // saveSettings(settings: GlobalSettings): Observable<any> {
  //   return this.http.put<any>(`${this.url}`, settings);
  // }
}
