import {Injectable} from '@angular/core';
import {UrlService} from './url.service';

@Injectable()
export class AuthService {

  constructor(private url: UrlService) {
  }

  getToken() {
      return localStorage.getItem("token");
  }

  setToken(newToken: string) {

      localStorage.setItem("token", newToken);
  }
}
