import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { batches } from './mockdata/batch.data';
import { buildings } from './mockdata/building.data';
import { curriculum } from './mockdata/curriculum.data';
import { locations } from './mockdata/location.data';
import { settings } from './mockdata/setting.data';
import { skills } from './mockdata/skill.data';
import { trainers } from './mockdata/trainer.data';

@Injectable()
export class InMemDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      batch: batches,
      building: buildings,
      curricula: curriculum,
      location: locations,
      setting: settings,
      skill: skills,
      trainer: trainers
    };
  }
}
