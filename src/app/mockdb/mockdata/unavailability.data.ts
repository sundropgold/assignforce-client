import { mockDataSize } from '../in-mem-db-settings';
import { Unavailability } from '../../model/Unavailability';

export const mockUnavailabilityData: Unavailability[] = [
  new Unavailability(0, 111, 120),
  new Unavailability(1, 211, 220),
  new Unavailability(2, 311, 320),
  new Unavailability(3, 411, 420),
  new Unavailability(4, 511, 520)
];

// export const unavailabilityData = {
//   id: 'unavailability-data',
//   type: 'object',
//   properties: {
//     unavailability: {
//       type: 'array',
//       minItems: mockDataSize,
//       items: {
//         $ref: 'unavailability'
//       },
//       uniqueItems: true
//     }
//   },
//   required: ['unavailability']
// };

// export const unavailabilityDef = {
//   id: 'unavailability',
//   type: 'object',
//   properties: {
//     id: {
//       $ref: 'id'
//     },
//     startDate: {
//       type: 'string',
//       faker: 'date.soon'
//     },
//     endDate: {
//       type: 'string',
//       faker: 'date.soon'
//     }
//   },
//   required: ['id', 'startDate', 'endDate']
// };
