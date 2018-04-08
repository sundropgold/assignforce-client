import { mockDataSize } from '../in-mem-db-settings';

export const unavailabilityData = {
  id: 'unavailability-data',
  type: 'object',
  properties: {
    unavailability: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'unavailability'
      },
      uniqueItems: true
    }
  },
  required: ['unavailability']
};

export const unavailabilityDef = {
  id: 'unavailability',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    startDate: {
      type: 'string',
      faker: 'date.soon'
    },
    endDate: {
      type: 'string',
      faker: 'date.soon'
    }
  },
  required: ['id', 'startDate', 'endDate']
};
