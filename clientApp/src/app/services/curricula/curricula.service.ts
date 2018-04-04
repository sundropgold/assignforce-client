import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curriculum } from '../../model/Curriculum';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurriculaService {
  //This value is for testing using the service without a backend, can be change later - Paul Fox
  url = 'api/curricula';

  constructor(private http: HttpClient) {}

  getCurricula(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(`${this.url}`);
  }
}
