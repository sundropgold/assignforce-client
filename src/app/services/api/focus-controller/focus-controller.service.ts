import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Focus } from '../../../model/Focus';

@Injectable()
export class FocusControllerService {
  constructor(private http: HttpClient) {}

  private focusController = environment.apiUrls.focusController;

  private generateDTO(focus: Focus) {
    const msg = {
      id: focus.id,
      name: focus.name,
      active: focus.active,
      skills: []
    };
    focus.skills.forEach(s => {
      msg.skills.push(environment.apiUrls.skillController.baseUrl + '/' + s.id);
    });
    return msg;
  }

  public create(focus: Focus): Observable<Focus> {
    return this.http.post<Focus>(this.focusController.baseUrl + this.focusController.create, this.generateDTO(focus));
  }
  public update(focus: Focus): Observable<Focus> {
    return this.http.put<Focus>(
      this.focusController.baseUrl + this.focusController.update + focus.id,
      this.generateDTO(focus)
    );
  }
  public findAll(): Observable<Focus[]> {
    return this.http.get<Focus[]>(this.focusController.baseUrl + this.focusController.findAll);
  }
  public remove(id: number): Observable<Focus> {
    return this.http.delete<Focus>(this.focusController.baseUrl + this.focusController.remove + id);
  }

  public find(id: number): Observable<Focus> {
    return this.http.get<Focus>(this.focusController.baseUrl + this.focusController.find + id);
  }
}
