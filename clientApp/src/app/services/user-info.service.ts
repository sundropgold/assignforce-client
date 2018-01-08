import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {User} from '../domain/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

<<<<<<< HEAD
    user: User

    constructor(private url: UrlService,
		private http: HttpClient) { }
=======
  user: User;
>>>>>>> 509d8d12e6b6b446070dae4f46c0e636ce3664b7

  constructor(private url: UrlService,
              private http: HttpClient) { }

<<<<<<< HEAD
    getUser(){
	return this.user;
    }
    setUser(u: User){
	this.user = u;
    }
=======
  loadUser(): Observable<User> {
    return this.http.get<User>(this.url.getUrl() + '/auth/userinfo');
  }

  getUser() {
    return this.user;
  }
  setUser(u: User) {
    this.user = u;
  }
>>>>>>> 509d8d12e6b6b446070dae4f46c0e636ce3664b7
}
