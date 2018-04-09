import { mockDataSize } from '../in-mem-db-settings';
import { Skill } from '../../model/Skill';

export const mockSkillData: Skill[] = [
  new Skill(0, 'Java', true),
  new Skill(1, 'SQL', true),
  new Skill(2, 'Angular 4', true),
  new Skill(3, 'Hibernate', true),
  new Skill(4, 'Spring', true)
];

// export const skillData = {
//   id: 'skill-data',
//   type: 'object',
//   properties: {
//     skill: {
//       type: 'array',
//       minItems: mockDataSize,
//       items: {
//         $ref: 'skill'
//       },
//       uniqueItems: true
//     }
//   },
//   required: ['skill']
// };

// export const skillDef = {
//   id: 'skill',
//   type: 'object',
//   properties: {
//     id: {
//       $ref: 'id'
//     },
//     active: {
//       $ref: 'active'
//     },
//     name: {
//       type: 'string',
//       faker: 'lorem.word'
//     }
//   },
//   required: ['id', 'name', 'active']
// };
