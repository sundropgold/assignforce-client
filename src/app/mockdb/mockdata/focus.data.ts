import { mockDataSize } from '../in-mem-db-settings';

export const focusData = {
  id: 'focus-data',
  type: 'object',
  properties: {
    focus: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'focus'
      },
      uniqueItems: true
    }
  },
  required: ['focus']
};

export const focusDef = {
  id: 'focus',
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
      faker: 'lorem.sentence'
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        $ref: 'skill'
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'name', 'skills']
};
