import { OnInit, Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import schemaFaker from 'json-schema-faker';
import faker from 'faker';

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

import { idDef, activeDef } from './mockdata/util.def';
import { addressData, addressDef } from './mockdata/address.data';
import { batchData, batchDef } from './mockdata/batch.data';
import { buildingData, buildingDef } from './mockdata/building.data';
import { curriculumData, curriculumDef } from './mockdata/curriculum.data';
import { focusData, focusDef } from './mockdata/focus.data';
import { roomData, roomDef } from './mockdata/room.data';
import { settingData, settingDef } from './mockdata/setting.data';
import { skillData, skillDef } from './mockdata/skill.data';
import { trainerData, trainerDef } from './mockdata/trainer.data';
import { unavailabilityData, unavailabilityDef } from './mockdata/unavailability.data';

@Injectable()
export class InMemDbService implements InMemoryDbService, OnInit {
  private jsf;
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
    this.jsf = require('json-schema-faker');
    this.jsf.extend('faker', () => faker);
  }

  async ngOnInit() {
    this.address = await schemaFaker.resolve(addressData, [idDef, activeDef]);
    console.log(this.address);
  }

  createDb() {
    return {
      address: this.address
    };
  }
}
