import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { buildingDef } from './building.data';
import { unavailabilityDef } from './unavailability.data';

export const roomDef = {
  id: 'room',
  type: 'object',
  properties: {
    id: {
      ...idDef
    },
    active: {
      ...activeDef
    },
    roomName: {
      type: 'string',
      faker: 'lorem.word'
    },
    building: {
      ...buildingDef
    },
    unavailabilities: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...unavailabilityDef
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'roomName', 'building', 'unavailabilities']
};

export const roomData = {
  id: 'room-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...roomDef
  },
  uniqueItems: true,
  required: ['room']
};
