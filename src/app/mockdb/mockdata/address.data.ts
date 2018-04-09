import { mockDataSize } from '../in-mem-db-settings';
import { Address } from '../../model/Address';

// id: number;
// name: string;
// city: string;
// state: string;
// active: boolean;
export const mockAddressData: Address[] = [
  new Address(0, 'Revature HQ', 'Reston', 'VA'),
  new Address(1, 'Tampa Office', 'Tampa', 'FL'),
  new Address(2, 'New York Office', 'New York', 'NY'),
  new Address(3, 'New Place 1', 'Chicago', 'IL'),
  new Address(4, 'New Place 2', 'Los Angeles', 'CA')
];

// export const mockAddressData = [{
//   id: 'address-data',
//   type: 'object',
//   properties: {
//     address: {
//       type: 'array',
//       minItems: mockDataSize,
//       items: {
//         $ref: 'address'
//       },
//       uniqueItems: true
//     }
//   },
//   required: ['address']
// };

// export const addressDef = {
//   id: 'address',
//   type: 'object',
//   properties: {
//     id: {
//       $ref: 'id'
//     },
//     name: {
//       type: 'string',
//       faker: 'address.streetAddress'
//     },
//     city: {
//       type: 'string',
//       faker: 'address.city'
//     },
//     state: {
//       type: 'string',
//       faker: 'address.state'
//     },
//     active: {
//       $ref: 'active'
//     }
//   },
//   required: ['id', 'name', 'city', 'state', 'active']
// };
