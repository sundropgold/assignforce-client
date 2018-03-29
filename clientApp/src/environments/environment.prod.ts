export const environment = {
  production: true,
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

  //base url
  baseURL: 'http://assignforce.revaturelabs.com'
};
