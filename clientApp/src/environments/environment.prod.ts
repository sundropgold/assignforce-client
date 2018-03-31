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
      baseUrl: 'http://address-service.cfapps.io/api/v2/location',
      createLocation: '',
      retrieveLocation: '/',
      updateLocation: '',
      retrieveAllLocation: ''
    },

    curriculumController: {
      baseUrl: 'http://curriculum-service.cfapps.io/api/v2/curriculum',
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
      baseUrl: 'http://setting-service.cfapps.io/api/v2/setting',
      createSetting: '',
      retrieveSetting: '/',
      getGlobalSetting: '',
      updateSetting: '',
      deleteSetting: '/'
    },

    skillController: {
      baseUrl: 'http://skill-service.cfapps.io',
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
      baseUrl: 'http://trainer-service.cfapps.io',
      createTrainer: '/vp/trainer/create',
      updateTrainer: '/vp/trainer/update',
      findTrainer: '/training/trainer/byemail/',
      makeInactive: '/vp/trainer/delete',
      getAllTrainersTitles: '/vp/trainer/titles',
      getAllTrainers: '/all/trainer/all'
    },

    unavailableController: {
      baseUrl: 'http://unavailable-service.cfapps.io/api/v2/unavailable',
      createUnavailability: '',
      retrieveUnavailability: '/',
      updateSkill: '',
      deleteUnavailability: '',
      retrieveAllUnavailabilities: ''
    }
  },

  //base url
  baseUrl: 'http://assignforce.revaturelabs.com'
};
