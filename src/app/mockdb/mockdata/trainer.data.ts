import { mockDataSize } from '../in-mem-db-settings';

export const trainerData = {
  id: 'trainer-data',
  type: 'object',
  properties: {
    trainer: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'trainer'
      },
      uniqueItems: true
    }
  },
  required: ['trainer']
};

// Certifications and Resume are omitted
export const trainerDef = {
  id: 'trainer',
  type: 'object',
  properties: {
    id: {
      $ref: 'id'
    },
    active: {
      $ref: 'active'
    },
    firstName: {
      type: 'string',
      faker: 'name.firstName'
    },
    lastName: {
      type: 'string',
      faker: 'name.lastName'
    },
    perferredLocations: {
      $ref: 'address'
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
  required: ['id', 'active', 'firstName', 'lastName', 'preferredLocation', 'skills', 'unavailabilities']
};
