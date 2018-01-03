import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Trainer} from '../domain/trainer';
import {CalendarDialogComponent} from '../pto/pto.component';
import {MatDialog} from '@angular/material';

@Injectable()
export class TrainerService {

  // url = 'https://trainer-service.cfapps.io/api/v2/trainer';
  url = 'http://localhost:9093/api/v2/trainer';

  constructor(private http: HttpClient,
              public dialog: MatDialog) {
  }

  // created an empty Trainer
  getEmptyTrainer() {
    // return new Trainer();
  }

  // Gets all trainers in the database
  getAll(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.url}`);
  }

  // Gets 1 trainer by their ID
  getById(id): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/${id}`);
  }

  // Gets 1 trainer by their first and last name
  getByFirstNameAndLastName(fName, lName): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/${fName}/${lName}`);
  }

  // Adds a new trainer to the database
  create(trainer): Observable<any> {
    return this.http.post<any>(`${this.url}`, trainer);
  }

  // Updates information about a given trainer
  update(trainer): Observable<any> {
    return this.http.put<any>(`${this.url}`, trainer);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  authorize() {
    this.showCalendar(); //For testing to make sure the Dialog is actually showing
    //gapi.load('client:auth2', this.showCalendar());

  }

  showCalendar() {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      // width: '450px',
    })
  }
}
