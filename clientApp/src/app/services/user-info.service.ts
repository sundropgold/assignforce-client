import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {User} from '../domain/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

  user: User;

  constructor(private url: UrlService,
              private http: HttpClient) { }

  loadUser(): Observable<User> {
    return this.http.get<User>(this.url.getUrl() + '/auth/userinfo');
  }

  getUser() {
      return JSON.parse(localStorage.getItem("user"));
  }
  setUser(u: User) {
      localStorage.setItem("user", JSON.stringify(this.user));
  }
}
