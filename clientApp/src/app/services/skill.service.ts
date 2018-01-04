import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Skill} from '../domain/skill';

@Injectable()
export class SkillService {

  url = 'api/v2/skill';

  constructor(private http: HttpClient) { }

  // var Skill = $resource('api/v2/skill/:skillId',{skillId:'@skillId'},{update:{method:'PUT', url:});

  getEmptySkill() {
    // return new Skill();
  }

  create(skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.url}`, skill);
  }

  getAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.url}`);
  }

  getById(skillId): Observable<Skill> {
    return this.http.get<Skill>(`${this.url}/${skillId}`);
  }

  update(skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.url}`, skill);
  }

  delete(skillId): Observable<any> {
    return this.http.delete<any>(`${this.url}/${skillId}`);
  }
}
