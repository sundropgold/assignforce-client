import { mockDataSize } from '../in-mem-db-settings';

export const curriculumData = {
  id: 'curriculum-data',
  type: 'object',
  properties: {
    curriculum: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'curriculum'
      },
      uniqueItems: true
    }
  },
  required: ['curriculum']
};

export const curriculumDef = {
  id: 'curriculum',
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
    focuses: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        $ref: 'focus'
      },
      uniqueItems: true
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
  required: ['id', 'active', 'name', 'focuses', 'skills']
};
