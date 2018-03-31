import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export abstract class ApiService<T> {
  constructor(protected http: HttpClient) {}

  protected urls: ApiUrl = {
    base: environment.baseApiUrl,
    api: '/',
    get: '/',
    update: '/',
    remove: '/',
    create: '/'
  };

  get(id: number): Observable<T> {
    return this.http.get<T>(this.urls.base + this.urls.api + this.urls.get + id);
  }

  create(t: T): Observable<T> {
    return this.http.put<T>(this.urls.base + this.urls.api + this.urls.create, t);
  }

  remove(t: T): Observable<T> {
    return this.http.request<T>('delete', this.urls.base + this.urls.api + this.urls.remove, { body: t });
  }

  update(t: T): Observable<T> {
    return this.http.post<T>(this.urls.base + this.urls.api + this.urls.update, t);
  }
}

export class ApiUrl {
  base: string;
  api: string;
  get: string;
  update: string;
  remove: string;
  create: string;
}
