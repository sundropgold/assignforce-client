import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as schemaFaker from 'json-schema-faker';
import * as faker from 'faker';

import { Address } from '../model/Address';
import { Batch } from '../model/Batch';
import { Building } from '../model/Building';
import { Curriculum } from '../model/Curriculum';
import { Focus } from '../model/Focus';
import { Room } from '../model/Room';
import { Setting } from '../model/Setting';
import { Skill } from '../model/Skill';
import { Trainer } from '../model/Trainer';
import { Unavailability } from '../model/Unavailability';

import { addressData } from './mockdata/address.data';
import { batchData } from './mockdata/batch.data';
import { buildingData } from './mockdata/building.data';
import { curriculumData } from './mockdata/curriculum.data';
import { focusData } from './mockdata/focus.data';
import { roomData } from './mockdata/room.data';
import { settingData } from './mockdata/setting.data';
import { skillData } from './mockdata/skill.data';
import { trainerData } from './mockdata/trainer.data';
import { unavailabilityData } from './mockdata/unavailability.data';

@Injectable()
export class InMemDbService implements InMemoryDbService {
  private address: Address[];
  private batch: Batch[];
  private building: Building[];
  private curriculum: Curriculum[];
  private focus: Focus[];
  private room: Room[];
  private setting: Setting[];
  private skill: Skill[];
  private trainer: Trainer[];
  private unavailability: Unavailability[];

  constructor() {
    schemaFaker.extend('faker', () => faker);
    this.loadMock();
  }

  async loadMock() {
    this.address = await schemaFaker.resolve(addressData);
    this.batch = await schemaFaker.resolve(batchData);
    this.building = await schemaFaker.resolve(buildingData);
    this.curriculum = await schemaFaker.resolve(curriculumData);
    this.focus = await schemaFaker.resolve(focusData);
    this.room = await schemaFaker.resolve(roomData);
    this.skill = await schemaFaker.resolve(skillData);
    this.trainer = await schemaFaker.resolve(trainerData);
    this.unavailability = await schemaFaker.resolve(unavailabilityData);
  }

  createDb() {
    return {
      address: this.address,
      batch: this.batch,
      building: this.building,
      curriculum: this.curriculum,
      focus: this.focus,
      room: this.room,
      skill: this.skill,
      trainer: this.trainer,
      unavailability: this.unavailability
    };
  }
}
