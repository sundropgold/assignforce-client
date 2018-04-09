import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';

export const skillDef = {
  id: 'skill',
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
      faker: 'lorem.word'
    }
  },
  required: ['id', 'name', 'active']
};

export const skillData = {
  id: 'skill-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...skillDef
  },
  uniqueItems: true,
  required: ['skill']
};
