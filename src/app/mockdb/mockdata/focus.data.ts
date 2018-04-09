import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { skillDef } from './skill.data';

export const focusDef = {
  id: 'focus',
  type: 'object',
  properties: {
    id: {
      ...idDef
    },
    active: {
      ...activeDef
    },
    name: {
      type: 'string',
      faker: 'lorem.sentence'
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...skillDef
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'name', 'skills']
};

export const focusData = {
  id: 'focus-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...focusDef
  },
  uniqueItems: true,
  required: ['focus']
};
