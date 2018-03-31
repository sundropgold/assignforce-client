import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Curriculum } from '../../../model/Curriculum';

@Injectable()
export class CurriculumApiService extends ApiService<Curriculum> {
  constructor(protected http: HttpClient) {
    super(http);
    this.urls.api = environment.apiUrls.curriculumService.api;
    this.urls.get = environment.apiUrls.curriculumService.get;
    this.urls.update = environment.apiUrls.curriculumService.update;
    this.urls.remove = environment.apiUrls.curriculumService.remove;
    this.urls.create = environment.apiUrls.curriculumService.create;
  }
}
