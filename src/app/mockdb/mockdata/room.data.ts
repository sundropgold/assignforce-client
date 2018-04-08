import { mockDataSize } from '../in-mem-db-settings';

export const roomData = {
  id: 'room-data',
  type: 'object',
  properties: {
    room: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'room'
      },
      uniqueItems: true
    }
  },
  required: ['room']
};

export const roomDef = {
  id: 'room',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    active: {
      $ref: 'active'
    },
    roomName: {
      type: 'string',
      faker: 'lorem.word'
    },
    building: {
      $ref: 'building'
    },
    unavailabilities: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        $ref: 'unavailability'
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'roomName', 'building', 'unavailabilities']
};
