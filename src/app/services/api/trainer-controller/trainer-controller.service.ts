import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Trainer } from '../../../model/Trainer';
import { Observable } from 'rxjs/Observable';
import { Action } from 'rxjs/scheduler/Action';

@Injectable()
export class TrainerControllerService {
  constructor(private http: HttpClient) {}

  private trainerController = environment.apiUrls.trainerController;

  private generateDTO(trainer: Trainer) {
    const msg = {
      id: trainer.id,
      firstName: trainer.firstName,
      lastName: trainer.lastName,
      skills: [],
      certifications: trainer.certifications,
      active: trainer.active,
      resume: trainer.resume,
      preferredLocation: trainer.preferredLocation,
      unavailabilities: []
    };
    trainer.skills.forEach(s => {
      msg.skills.push(environment.apiUrls.skillController.baseUrl + '/' + s.id);
    });
    trainer.unavailabilities.forEach(u => {
      msg.unavailabilities.push(environment.apiUrls.unavailableController.baseUrl + '/' + u.id);
    });
    return msg;
  }

  public create(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(
      this.trainerController.baseUrl + this.trainerController.create,
      this.generateDTO(trainer)
    );
  }
  public update(trainer: Trainer): Observable<Trainer> {
    return this.http.put<Trainer>(this.trainerController.baseUrl + this.trainerController.update + trainer.id, {
      firstName: trainer.firstName,
      lastName: trainer.lastName,
      email: localStorage.getItem('user-email'),
      skills: this.parseSkills(trainer.skills),
      active: trainer.active,
      resume: trainer.resume
    });
  }

  private parseSkills(skills) {
    return skills.map(skill => {
      return `${this.trainerController.baseUrl}/skills/${skill.id}`;
    });
  }

  public findAll(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.trainerController.baseUrl + this.trainerController.findAll);
  }
  public remove(id: number): Observable<Trainer> {
    return this.http.delete<Trainer>(this.trainerController.baseUrl + this.trainerController.remove + id);
  }

  public find(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(this.trainerController.baseUrl + this.trainerController.find + id);
  }

  public findByEmail(email: String) {
    return this.http.get<Trainer>(this.trainerController.baseUrl + `/email?email=${email}`);
  }
}
