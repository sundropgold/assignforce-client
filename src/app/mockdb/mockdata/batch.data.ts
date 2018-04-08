import { mockDataSize } from '../in-mem-db-settings';

export const batchData = {
  id: 'batch-data',
  type: 'object',
  properties: {
    batch: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'batch'
      },
      uniqueItems: true
    }
  },
  required: ['batch']
};

export const batchDef = {
  id: 'batch',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    name: {
      type: 'string',
      faker: 'lorem.sentence'
    },
    startDate: {
      type: 'string',
      faker: 'date.soon'
    },
    endDate: {
      type: 'string',
      faker: 'date.soon'
    },
    curriculum: {
      $ref: 'curriculum'
    },
    focus: {
      $ref: 'focus'
    },
    trainer: {
      $ref: 'trainer'
    },
    cotrainer: {
      $ref: 'trainer'
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        $ref: 'skill'
      },
      uniqueItems: true
    },
    address: {
      $ref: 'address'
    },
    building: {
      $ref: 'building'
    },
    room: {
      $ref: 'room'
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
