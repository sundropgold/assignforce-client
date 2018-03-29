import { Injectable } from '@angular/core';
import { GetApiUrlService } from './getApiUrl.service';
import { Setting } from '../../model/setting';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiUrlBuilderService {
  constructor(private apiUrlService: GetApiUrlService, private http: HttpClient) {}

  // private settingsUrl : string = '/api/v2/setting';
  //
  // retrieveSetting(settingId : number) : Observable<Setting> {
  //   return this.http.get<Setting>(`${this.settingsUrl}/${settingId}`)
  // }
  //
  //
}
