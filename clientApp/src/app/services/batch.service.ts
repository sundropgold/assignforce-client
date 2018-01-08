import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Batch} from '../domain/batch';
import {Observable} from 'rxjs/Observable';
import {UrlService} from './url.service';

@Injectable()
export class BatchService {

   // url = 'http://localhost:9092/api/v2/batch';
    url = this.urlService.getUrl() + '/api/batch/api/v2/batch';

  constructor(private http: HttpClient,
              private urlService: UrlService) { }


  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.url}`);
  }

  getById(id): Observable<Batch> {
    return this.http.get<Batch>(`${this.url}/${id}`);
  }

  create(batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.url}`, batch);
  }

  delete(id): Observable<object> {
    return this.http.delete<Object>(`${this.url}/${id}`);
  }

  update(batch): Observable<Batch> {
    return this.http.put<Batch>(`${this.url}`, batch);
  }

}
