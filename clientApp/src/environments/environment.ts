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
      baseUrl: this.baseApiUrl + '/batch',
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
      baseUrl: this.baseApiUrl + '/address',
      createLocation: '/vp/location/create',
      updateLocation: '/vp/location/update',
      getAllLocations: '/all/location/all',
      removeLocation: '/vp/location/delete',
      reactivateLocation: '/vp/location/reactivate'
    },

    buildingController: {
      baseUrl: this.baseApiUrl + '/address/building',
      createBuilding: '',
      retrieveBuilding: '/',
      updateBuilding: '',
      deleteBuilding: '/',
      retrieveAllBuildings: ''
    },

    locationController: {
      baseUrl: this.baseApiUrl + '/address/location',
      createLocation: '',
      retrieveLocation: '/',
      updateLocation: '',
      deleteLocation: '/',
      retrieveAllLocation: ''
    },

    curriculumController: {
      baseUrl: this.baseApiUrl + '/curriculum',
      createCurriculum: '',
      retrieveCurriculum: '/',
      updateCurriculum: '',
      deleteCurriculum: '/',
      retrieveAllCurricula: '',
      retrieveAllActiveCurricula: '/active',
      retrieveAllCore: '/core',
      retrieveAllActiveCore: '/activeCore',
      retrieveAllFocus: '/focus',
      retrieveAllActiveFocus: '/activeFocus'
    },

    settingController: {
      baseUrl: this.baseApiUrl + '/setting',
      createSetting: '',
      retrieveSetting: '/',
      getGlobalSetting: '',
      updateSetting: '',
      deleteSetting: '/'
    },

    skillController: {
      baseUrl: this.baseApiUrl + '/skillController',
      findAllActive: '/skill/all',
      findAll: '/vp/skill',
      findSkillById: '/skill/',
      updateSkillCaliber: '/vp/skill/update',
      saveSkill: '/vp/skill',
      createSkill: '/api/v2/skill',
      retrieveSkill: '/api/v2/skill/',
      updateSkillMinerva: '/api/v2/skill',
      deleteSkill: '/api/v2/skill/',
      retrieveAllSkills: '/api/v2/skill',
      retrieveSkillsByIds: '/api/v2/skill/ids'
    },

    trainerController: {
      baseUrl: this.baseApiUrl + '/trainer',
      createTrainer: '/vp/trainer/create',
      updateTrainer: '/vp/trainer/update',
      findTrainer: '/training/trainer/byemail/',
      makeInactive: '/vp/trainer/delete',
      getAllTrainersTitles: '/vp/trainer/titles',
      getAllTrainers: '/all/trainer/all'
    },

    unavailableController: {
      baseUrl: this.baseApiUrl + '/unavailable',
      createUnavailability: '',
      retrieveUnavailability: '/',
      deleteUnavailability: '',
      retrieveAllUnavailabilities: ''
    }
  },

  baseUrl: 'http://localhost:4200',
  baseApiUrl: 'https://hydra.cfapps.io'
};
