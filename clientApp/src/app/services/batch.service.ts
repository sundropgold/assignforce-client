import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Batch} from '../domain/batch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BatchService {

  // url = 'http://localhost:9092/api/v2/batch';
  url = 'https://batch-service.cfapps.io/api/v2/batch';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.url}`);
  }

  getById(id): Observable<Batch> {
    return this.http.get<Batch>(`${this.url}/${id}`);
  }

  create(batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.url}`, batch);
  }

  update(batch): Observable<Batch> {
    return this.http.put<Batch>(`${this.url}`, batch);
  }

}
