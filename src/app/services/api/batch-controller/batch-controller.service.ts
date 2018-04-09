import { Injectable } from '@angular/core';
import { Batch } from '../../../model/Batch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../../model/Skill';

@Injectable()
export class BatchControllerService {
  constructor(private http: HttpClient) {}

  private batchController = environment.apiUrls.batchController;

  public create(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(this.batchController.baseUrl + this.batchController.create, {
      name: batch.name,
      startDate: batch.startDate,
      endDate: batch.endDate,
      curriculum: `${environment.apiUrls.curriculumController.baseUrl}/${batch.curriculum.id}`,
      focus: `${environment.apiUrls.focusController.baseUrl}/${batch.focus.id}`,
      trainer: `${environment.apiUrls.trainerController.baseUrl}/${batch.trainer.id}`,
      skills: this.parseSkills(batch.skills),
      address: `${environment.apiUrls.addressController.baseUrl}/${batch.address.id}`,
      building: `${environment.apiUrls.buildingController.baseUrl}/${batch.building.id}`,
      room: `${environment.apiUrls.roomController.baseUrl}/${batch.room.id}`
    });
  }
  public update(batch: Batch): Observable<Batch> {
    return this.http.put<Batch>(this.batchController.baseUrl + this.batchController.update + batch.id, {
      name: batch.name,
      startDate: batch.startDate,
      endDate: batch.endDate,
      curriculum: `${environment.apiUrls.curriculumController.baseUrl}/${batch.curriculum.id}`,
      focus: `${environment.apiUrls.focusController.baseUrl}/${batch.focus.id}`,
      trainer: `${environment.apiUrls.trainerController.baseUrl}/${batch.trainer.id}`,
      skills: this.parseSkills(batch.skills),
      address: `${environment.apiUrls.addressController.baseUrl}/${batch.address.id}`,
      building: `${environment.apiUrls.buildingController.baseUrl}/${batch.building.id}`,
      room: `${environment.apiUrls.roomController.baseUrl}/${batch.room.id}`
    });
  }
  public findAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.batchController.baseUrl + this.batchController.findAll);
  }
  public remove(id: number): Observable<Batch> {
    return this.http.delete<Batch>(this.batchController.baseUrl + this.batchController.remove + id);
  }

  public find(id: number): Observable<Batch> {
    return this.http.get<Batch>(this.batchController.baseUrl + this.batchController.find + id);
  }

  private parseSkills(skills) {
    return skills.map(skill => {
      return `${this.batchController.baseUrl}/skills/${skill.id}`;
    });
  }
}
