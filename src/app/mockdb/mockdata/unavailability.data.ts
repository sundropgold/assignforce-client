import { mockDataSize } from '../in-mem-db-settings';
import { idDef } from './util.def';

export const unavailabilityDef = {
  id: 'unavailability',
  type: 'object',
  properties: {
    id: {
      ...idDef
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

export const unavailabilityData = {
  id: 'unavailability-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...unavailabilityDef
  },
  uniqueItems: true,
  required: ['unavailability']
};
