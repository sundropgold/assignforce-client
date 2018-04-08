import { mockDataSize } from '../in-mem-db-settings';

export const addressData = {
  id: 'address-data',
  type: 'object',
  properties: {
    address: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'address'
      },
      uniqueItems: true
    }
  },
  required: ['address']
};

export const addressDef = {
  id: 'address',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
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
      $ref: 'active'
    }
  },
  required: ['id', 'name', 'city', 'state', 'active']
};
