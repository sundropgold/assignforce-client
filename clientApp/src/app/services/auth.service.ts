import {Injectable} from '@angular/core';
import {UrlService} from './url.service';

@Injectable()
export class AuthService {

  token = '';

  constructor(private url: UrlService) {
  }

  getToken() {
    return this.token;
  }

  setToken(newToken: string) {
    this.token = newToken;
  }
}
