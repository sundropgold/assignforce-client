import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Trainer } from '../../../model/Trainer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrainerControllerService {
  constructor(private http: HttpClient) {}

  private trainerController = environment.apiUrls.trainerController;

  public createTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(this.trainerController.baseUrl + this.trainerController.createTrainer, trainer);
  }

  public updateTrainer(trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(this.trainerController.baseUrl + this.trainerController.updateTrainer, trainer);
  }

  public findTrainer(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.trainerController.baseUrl + this.trainerController.findTrainer + id);
  }

  public makeInactive(id: number): Observable<Trainer> {
    return this.http.delete<Trainer>(this.trainerController.baseUrl + this.trainerController.makeInactive + id);
  }

  public getAllTrainersTitles(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainerController.baseUrl + this.trainerController.getAllTrainersTitles);
  }

  public getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainerController.baseUrl + this.trainerController.getAllTrainers);
  }
}
