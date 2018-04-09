import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { addressDef } from './address.data';
import { skillDef } from './skill.data';
import { unavailabilityDef } from './unavailability.data';

// Certifications and Resume are omitted
export const trainerDef = {
  id: 'trainer',
  type: 'object',
  properties: {
    id: {
      ...idDef
    },
    active: {
      ...activeDef
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
      ...addressDef
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...skillDef
      },
      uniqueItems: true
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
  required: ['id', 'active', 'firstName', 'lastName', 'preferredLocation', 'skills', 'unavailabilities']
};

export const trainerData = {
  id: 'trainer-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...trainerDef
  },
  uniqueItems: true,
  required: ['trainer']
};
