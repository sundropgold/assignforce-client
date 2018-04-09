import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { curriculumDef } from './curriculum.data';
import { focusDef } from './focus.data';
import { trainerDef } from './trainer.data';
import { skillDef } from './skill.data';
import { addressDef } from './address.data';
import { buildingDef } from './building.data';
import { roomDef } from './room.data';

export const batchDef = {
  id: 'batch',
  type: 'object',
  properties: {
    id: {
      ...idDef
    },
    name: {
      type: 'string',
      faker: 'lorem.word'
    },
    startDate: {
      type: 'string',
      faker: 'date.future'
    },
    endDate: {
      type: 'string',
      faker: 'date.future'
    },
    curriculum: {
      ...curriculumDef
    },
    focus: {
      ...focusDef
    },
    trainer: {
      ...trainerDef
    },
    cotrainer: {
      ...trainerDef
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...skillDef
      },
      uniqueItems: true
    },
    address: {
      ...addressDef
    },
    building: {
      ...buildingDef
    },
    room: {
      ...roomDef
    }
  },
  required: [
    'id',
    'name',
    'startDate',
    'endDate',
    'curriculum',
    'focus',
    'trainer',
    'cotrainer',
    'skills',
    'address',
    'building',
    'room'
  ]
};

export const batchData = {
  id: 'batch-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...batchDef
  },
  uniqueItems: true,
  required: ['batch']
};
