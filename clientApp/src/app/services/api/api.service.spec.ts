import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { UrlService } from '../url/url.service';
import { environment } from '../../../environments/environment';

describe('ApiService', () => {
  let apiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
    apiService = new ApiService();
  });

  it(
    'should be created',
    inject([ApiService], (service: ApiService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should return curriculumService url when getCurriculumServiceUrl is called', () => {
    expect(apiService.getCurriculumServiceUrl()).toBe(environment.apiUrls.curriculumService);
  });

  it('should return locationService url when getLocationServiceUrl is called', () => {
    expect(apiService.getLocationServiceUrl()).toBe(environment.apiUrls.locationService);
  });

  it('should return settingsService url when getSettingsServiceUrl is called', () => {
    expect(apiService.getSettingsServiceUrl()).toBe(environment.apiUrls.settingsService);
  });

  it('should return skillService url when getSkilLServiceUrl is called', () => {
    expect(apiService.getSkilLServiceUrl()).toBe(environment.apiUrls.skillService);
  });

  it('should return trainerService url when getTrainerServiceUrl is called', () => {
    expect(apiService.getTrainerServiceUrl()).toBe(environment.apiUrls.trainerService);
  });

  it('should return unavailableService url when getUnavailableServiceUrl is called', () => {
    expect(apiService.getUnavailableServiceUrl()).toBe(environment.apiUrls.unavailableService);
  });

  it('should return centralConfig url when getCentralConfigUrl is called', () => {
    expect(apiService.getCentralConfigUrl()).toBe(environment.apiUrls.centralConfig);
  });
  it('should return batchService url when getBatchServiceUrl is called', () => {
    expect(apiService.getBatchServiceUrl()).toBe(environment.apiUrls.batchService);
  });
});
