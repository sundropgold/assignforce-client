import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { addressDef } from './address.data';
import { roomDef } from './room.data';

export const buildingDef = {
  id: 'building',
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
    },
    address: {
      ...addressDef
    },
    rooms: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...roomDef
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'name', 'address', 'rooms']
};

export const buildingData = {
  id: 'building-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...buildingDef
  },
  uniqueItems: true,
  required: ['building']
};
