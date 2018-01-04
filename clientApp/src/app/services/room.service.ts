import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../domain/room';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RoomService {

  url = 'https://location-service.cfapps.io/api/v2/room';

  constructor(private http: HttpClient) {
  }

  // Gets all Room in the database
  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}`);
  }

  // Gets 1 Room by their ID
  getById(id): Observable<Room> {
    return this.http.get<Room>(`${this.url}/${id}`);
  }

  // Adds a new Room to the database
  create(room: Room): Observable<any> {
    return this.http.post<any>(`${this.url}`, room);
  }

  // Updates information about a given Room
  update(room: Room): Observable<any> {
    return this.http.put<any>(`${this.url}`, room);
  }

  delete(room: Room): Observable<any> {
    return this.http.delete<any>(`${this.url}/${room.roomID}`);
  }
}
