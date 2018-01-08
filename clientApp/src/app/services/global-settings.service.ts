import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalSettings} from '../domain/global-settings';
import {UrlService} from "./url.service";

@Injectable()
export class SettingsService {

  url = '/api/v2/setting/api/v2/setting';

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  // Gets all settings, open up possibilities for future development
  getSettings(): Observable<GlobalSettings[]> {
    return this.http.get<GlobalSettings[]>(this.urlService.getUrl() + this.url );
  }

  // Updates settings
  saveSettings(settings: GlobalSettings): Observable<any> {
    return this.http.put<any>(this.urlService.getUrl() + this.url , settings);
  }
}
