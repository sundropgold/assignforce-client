import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Room } from '../domain/room';
import { Trainer} from '../domain/trainer';
import { Observable} from 'rxjs/Observable';
import { UnavailableRoom} from '../domain/unavailable';
import { UnavailableTrainer} from '../domain/unavailable';
import {UrlService} from './url.service';

@Injectable()
export class UnavailableService {

  // url = 'https://unavailable-service.cfapps.io/api/v2/unavailable/';
  url = this.urlService.getUrl() + '/api/unavailable/api/v2/unavailable/';

  constructor(private http: HttpClient,
              private urlService: UrlService) { }

  createUnavailableRoom( room ): Observable<UnavailableRoom> {
    return this.http.post<UnavailableRoom>(`${this.url}`, room);
  }

  createUnavailableTrainer( trainer ): Observable<UnavailableTrainer> {
    return this.http.post<UnavailableTrainer>(`${this.url}`, trainer);
  }

  getUnavailableTrainer (id): Observable<UnavailableTrainer[]> {
    return this.http.get<UnavailableTrainer[]>(`${this.url}/${id}`);
  }

  getUnavailableRoom (id): Observable<UnavailableRoom> {
    return this.http.get<UnavailableRoom>(`${this.url}/${id}`);
  }

  updateUnavailableTrainer (trainer): Observable<UnavailableTrainer> {
    return this.http.put<UnavailableTrainer>(`${this.url}`, trainer);
  }

  updateUnavailableRoom (room): Observable<UnavailableRoom> {
    return this.http.put<UnavailableRoom>(`${this.url}`, room);
  }
}
