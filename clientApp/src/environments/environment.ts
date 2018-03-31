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
    batchController: {
      baseUrl: 'http://batch-service.cfapps.io',
      createBatch: '/all/batch/create',
      deleteBatch: '/all/batch/delete/',
      updateBatch: '/all/batch/update',
      findCommonLocations: '/all/locations',
      getAllBatches: '/qc/batch/all',
      findAllBatchesByTrainer: '/trainer/batch/all',
      createWeek: '/trainer/week/new/',
      getAllVpBatches: '/vp/batch/all',
      getAllCurrentBatches: '/vp/batch/all/current'
    },

    addressController: {
      baseUrl: 'http://address-service.cfapps.io',
      createLocation: '/vp/location/create',
      updateLocation: '/vp/location/update',
      getAllLocations: '/all/location/all',
      removeLocation: '/vp/location/delete',
      reactivateLocation: '/vp/location/reactivate'
    },

    buildingController: {
      baseUrl: 'http://address-service.cfapps.io/api/v2/building',
      createBuilding: '',
      retrieveBuilding: '/',
      updateBuilding: '',
      deleteBuilding: '/',
      retrieveAllBuildings: ''
    },

    locationController: {
      baseUrl: 'http://address-service.cfapps.io/api/v2/location'
    },

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
