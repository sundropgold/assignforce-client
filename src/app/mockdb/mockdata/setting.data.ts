import { mockDataSize } from '../in-mem-db-settings';

export const settingData = {
  id: 'setting-data',
  type: 'object',
  properties: {
    setting: {
      type: 'array',
      minItems: mockDataSize,
      items: {
        $ref: 'setting'
      },
      uniqueItems: true
    }
  },
  required: ['setting']
};

export const settingDef = {
  id: 'setting',
  type: 'object',
  properties: {},
  required: []
};
