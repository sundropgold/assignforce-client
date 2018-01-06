import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalSettings} from '../domain/global-settings';

@Injectable()
export class SettingsService {

  url = 'https://settings-service.cfapps.io/api/v2/setting';

  constructor(private http: HttpClient) {
  }

  // Gets all settings, open up possibilities for future development
  getSettings(): Observable<GlobalSettings[]> {
    return this.http.get<GlobalSettings[]>(`${this.url}`);
  }

  // Updates settings
  saveSettings(settings: GlobalSettings): Observable<any> {
    return this.http.put<any>(`${this.url}`, settings);
  }
}
