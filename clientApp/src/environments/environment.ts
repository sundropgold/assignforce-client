// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { HttpRequest } from '@angular/common/http';

export const environment = {
  production: false,
  //routers
  appRoutes: {
    login: '',
    overview: 'overview',
    batches: 'batches',
    locations: 'locations',
    curricula: 'curricula',
    trainers: 'trainers',
    profile: 'profile',
    reports: 'reports',
    settings: 'settings'
  },

  apiUrls: {
    curriculumService: 'https://curriculum-service.cfapps.io',
    locationService: 'https://location-service.cfapps.io',
    settingsService: 'https://settings-service.cfapps.io',
    skillService: 'https://skill-service.cfapps.io',
    trainerService: 'https://trainer-service.cfapps.io',
    unavailableService: 'https://unavailable-service.cfapps.io',
    centralConfig: 'https://central-config.cfapps.io',
    batchService: 'https://batch-service.cfapps.io'
  },

  createSettingsApi: '/api/v2/setting',

  baseUrl: 'http://localhost:4200'
};
