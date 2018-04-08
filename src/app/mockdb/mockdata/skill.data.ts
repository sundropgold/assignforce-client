import { mockDataSize } from '../in-mem-db-settings';

export const skillData = {
  id: 'skill-data',
  type: 'object',
  properties: {
    skill: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'skill'
      },
      uniqueItems: true
    }
  },
  required: ['skill']
};

export const skillDef = {
  id: 'skill',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    active: {
      $ref: 'active'
    },
    name: {
      type: 'string',
      faker: 'lorem.word'
    }
  },
  required: ['id', 'name', 'active']
};
