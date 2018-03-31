// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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

  baseUrl: 'http://localhost:4200',
  baseApiUrl: 'https://assignforceback.cfapps.io/api/v2'
};
