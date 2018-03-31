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
    curriculumService: {
      base: this.baseUrl,
      api: '/curriculum',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    locationService: {
      base: this.baseUrl,
      api: '/location',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    settingsService: {
      base: this.baseUrl,
      api: '/setting',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    skillService: {
      base: this.baseUrl,
      api: '/skill',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    trainerService: {
      base: this.baseUrl,
      api: '/trainer',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    unavailableService: {
      base: this.baseUrl,
      api: '/unavailable',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    centralConfig: {
      base: this.baseUrl,
      api: '/centralConfig',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    batchService: {
      base: this.baseUrl,
      api: '/batch',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    },
    buildingService: {
      base: this.baseUrl,
      api: '/building',
      get: '/',
      update: '/',
      remove: '/',
      create: '/'
    }
  },

  //base url
  baseUrl: 'http://assignforce.revaturelabs.com',
  baseApiUrl: 'https://assignforceback.cfapps.io/api/v2'
};
