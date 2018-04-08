import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Setting } from '../../../model/Setting';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingControllerService {
  constructor(private http: HttpClient) {}

  public find(id: number): Observable<Setting> {
    //return this.http.get<Setting>(this.settingController.baseUrl + this.settingController.retrieveSetting + id);
    return null;
  }

  public update(setting: Setting): Observable<Setting> {
    //return this.http.put<Setting>(this.settingController.baseUrl + this.settingController.updateSetting, setting);
    return null;
  }
}
