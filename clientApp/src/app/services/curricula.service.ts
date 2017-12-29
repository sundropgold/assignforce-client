import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Curriculum} from '../domain/curriculum';

@Injectable()
export class CurriculaService {

  url = 'http://localhost:9093/api/v2/curriculum';
  // url = 'api/v2/curriculum';
  constructor(private http: HttpClient) { }

  /* services */


  // Get all curricula
  getAll(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(`${this.url}`);
  }

  // Get curriculum by id
  getById(id): Observable<Curriculum> {
    return this.http.get<Curriculum>(`${this.url}/${id}`);
  }
}
