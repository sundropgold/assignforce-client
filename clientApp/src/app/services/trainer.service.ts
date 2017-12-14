import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Trainer} from '../domain/trainer';

@Injectable()
export class TrainerService {

  url = 'api/v2/trainer';

  constructor(private http: HttpClient) { }

  // created an empty Trainer
  getEmptyTrainer() {
    // return new Trainer();
  }

  // Gets all trainers in the database
  getAll(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.url}`);
  }

  getById(id): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/${id}`);
  }

  getByFirstNameAndLastName(fName, lName): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/${fName}/${lName}`);
  }

  create(trainer): Observable<any> {
    return this.http.post<any>(`${this.url}`, trainer);
  }

  update(trainer): Observable<any> {
    console.log(`${this.url}`);
    return this.http.put<any>(`${this.url}`, trainer);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
