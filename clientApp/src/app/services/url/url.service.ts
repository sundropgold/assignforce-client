import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../../model/batch';

@Injectable()
export class UrlService {
  url = 'https://localhost';
  batchUrl = 'api/batches';

  constructor(private http: HttpClient) {}

  getUrl() {
    return this.url;
  }

  testCors1(): Observable<any> {
    return this.http.get(this.url);
  }
  testCors2(): Observable<any> {
    return this.http.get(this.url + '/auth/userinfo');
  }

  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchUrl);
  }
}
