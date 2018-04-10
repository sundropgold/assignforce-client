import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Setting } from '../../../model/Setting';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingControllerService {
  constructor(private http: HttpClient) {}

  private settingController = environment.apiUrls.settingController;

  private generateDTO(setting: Setting) {
    const msg = {
      id: setting.id,
      alias: setting.alias,
      trainersPerPage: setting.trainersPerPage,
      reportGrads: setting.reportGrads,
      batchLength: setting.batchLength,
      reportIncomingGrads: setting.reportIncomingGrads,
      minBatchSize: setting.minBatchSize,
      maxBatchSize: setting.maxBatchSize,
      trainerBreakDays: setting.trainerBreakDays,
      defaultLocation: "" ,
      defaultBuilding: "",
      defaultNamePattern: setting.defaultNamePattern
    };
    return msg;
  }

  public find(): Observable<Setting[]> {
    return this.http.get<Setting[]>(this.settingController.baseUrl + this.settingController.find);
  }

  public update(setting: Setting): Observable<Setting> {
    return this.http.put<Setting>(
      this.settingController.baseUrl + this.settingController.update + setting.id,
      this.generateDTO(setting)
    );
  }
}
