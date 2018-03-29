import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { locations as locationsData } from './mockdata/locations.data';
import { curricula as curriculaData } from './mockdata/curricula.data';

@Injectable()
export class InMemDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const locations = locationsData;
    const curricula = curriculaData;

    return {
      locations: locationsData,
      curricula: curriculaData
    };
  }
}
