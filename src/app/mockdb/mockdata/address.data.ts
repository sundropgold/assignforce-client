import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';

export const addressDef = {
  id: 'address',
  type: 'object',
  properties: {
    id: {
      ...idDef
    },
    name: {
      type: 'string',
      faker: 'address.streetAddress'
    },
    city: {
      type: 'string',
      faker: 'address.city'
    },
    state: {
      type: 'string',
      faker: 'address.state'
    },
    active: {
      ...activeDef
    }
  },
  required: ['id', 'name', 'city', 'state', 'active']
};

export const addressData = {
  id: 'address-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...addressDef
  },
  uniqueItems: true,
  required: ['address']
};
