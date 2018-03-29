import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  constructor() {}

  getCurriculumServiceUrl(): string {
    return environment.apiUrls.curriculumService;
  }
  getLocationServiceUrl(): string {
    return environment.apiUrls.locationService;
  }

  getSettingsServiceUrl(): string {
    return environment.apiUrls.settingsService;
  }

  getSkilLServiceUrl(): string {
    return environment.apiUrls.skillService;
  }

  getTrainerServiceUrl(): string {
    return environment.apiUrls.trainerService;
  }

  getUnavailableServiceUrl(): string {
    return environment.apiUrls.unavailableService;
  }

  getCentralConfigUrl(): string {
    return environment.apiUrls.centralConfig;
  }

  getBatchServiceUrl(): string {
    return environment.apiUrls.batchService;
  }
}
