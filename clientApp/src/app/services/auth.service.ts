import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {User} from '../domain/user';

@Injectable()
export class AuthService {

  token: string = '';

  constructor(private url: UrlService) { }

  getToken() {
    return this.token;
  }

  setToken(newToken: string) {
    this.token = newToken;
  }
}
