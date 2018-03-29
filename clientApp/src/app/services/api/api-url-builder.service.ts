import { Injectable } from '@angular/core';
import { GetApiUrlService } from './getApiUrl.service';

@Injectable()
export class ApiUrlBuilderService {
  constructor(private apiUrlService: GetApiUrlService) {}
}
