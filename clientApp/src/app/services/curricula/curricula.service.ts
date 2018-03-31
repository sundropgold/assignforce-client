import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curriculum } from '../../model/Curriculum';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CurriculaService {

  constructor(private http: HttpClient) {}

  getCurricula(): Observable<Curriculum[]> {

    return this.http.get<Curriculum[]>('api/curricula');

  }

}
