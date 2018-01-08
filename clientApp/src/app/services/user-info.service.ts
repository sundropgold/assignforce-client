import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {User} from '../domain/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserInfoService {


  constructor(private url: UrlService,
              private http: HttpClient) { }

  loadUser(): Observable<User> {
    return this.http.get<User>(this.url.getUrl() + '/auth/userinfo');
  }

  logout(): Observable<any>{
    return this.http.post(this.url.getUrl() + '/revokelogout', {});
  }

  getUser() {
      return JSON.parse(localStorage.getItem('user'));
  }

  setUser(u: User) {
      localStorage.setItem('user', JSON.stringify(u));
  }


}
