import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Batch} from '../domain/batch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BatchService {

  url = 'api/v2/batch';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`http://localhost:9092/${this.url}`);
  }

  getById(id): Observable<Batch> {
    return this.http.get<Batch>(`${this.url}/${id}`);
  }

}
