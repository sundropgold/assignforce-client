import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { BatchStatus } from '../../../model/BatchStatus';

@Injectable()
export class BatchStatusApiService extends ApiService<BatchStatus> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.batchService.api;
    this.urls.get = environment.apiUrls.batchService.get;
    this.urls.update = environment.apiUrls.batchService.update;
    this.urls.remove = environment.apiUrls.batchService.remove;
    this.urls.create = environment.apiUrls.batchService.create;
  }
}
