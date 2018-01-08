import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Skill} from '../domain/skill';
import {UrlService} from './url.service';

@Injectable()
export class SkillService {

  // url = 'http://localhost:9090/api/v2/skill';
  url = this.urlService.getUrl() + '/api/skill/api/v2/skill';
  constructor(private http: HttpClient,
              private urlService: UrlService) { }

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

  getSkillsByIds(ids): Observable<Skill[]> {
    return this.http.post<Skill[]>(`${this.url}/ids`, ids);
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
