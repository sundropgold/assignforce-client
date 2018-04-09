import { mockDataSize } from '../in-mem-db-settings';
import { idDef, activeDef } from './util.def';
import { focusDef } from './focus.data';
import { skillDef } from './skill.data';

export const curriculumDef = {
  id: 'curriculum',
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
    focuses: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...focusDef
      },
      uniqueItems: true
    },
    skills: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        ...skillDef
      },
      uniqueItems: true
    }
  },
  required: ['id', 'active', 'name', 'focuses', 'skills']
};

export const curriculumData = {
  id: 'curriculum-data',
  type: 'array',
  minItems: mockDataSize,
  items: {
    ...curriculumDef
  },
  uniqueItems: true,
  required: ['curriculum']
};
