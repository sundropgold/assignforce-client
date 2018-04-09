import { mockDataSize } from '../in-mem-db-settings';
import { Curriculum } from '../../model/Curriculum';
import { Focus } from '../../model/Focus';
import { Skill } from '../../model/Skill';
export const mockCurriculumData: Curriculum[] = [
  new Curriculum(
    1,
    'Java',
    true,
    [new Focus(1, 'Microservices', true, [new Skill(1, 'Core Java', true)])],
    [new Skill(2, 'SQL', true), new Skill(3, 'Hibernate', true), new Skill(10, 'Spring', true)]
  ),
  new Curriculum(
    2,
    '.NET',
    true,
    [new Focus(1, 'Microservices', true, [new Skill(4, 'HTTP', true)])],
    [new Skill(2, 'REST', true), new Skill(13, 'SOAP', true)]
  ),
  new Curriculum(
    3,
    'Business Analyst',
    true,
    [new Focus(1, 'InfoSys', true, [new Skill(2, 'SQL', true)])],
    [new Skill(5, 'ERD', true)]
  ),
  new Curriculum(
    4,
    'Appian',
    true,
    [new Focus(1, 'Core Java', true, [new Skill(1, 'Business Mod', true)])],
    [new Skill(2, 'SQL', true), new Skill(3, 'Hibernate', true)]
  ),
  new Curriculum(
    5,
    'Sys Admin',
    true,
    [new Focus(1, 'Goldman Sachs', true, [new Skill(1, 'PgAdmin', true)])],
    [new Skill(2, 'SQL', true)]
  )
];
// export const curriculumData = {
//   id: 'curriculum-data',
//   type: 'object',
//   properties: {
//     curriculum: {
//       type: 'array',
//       minItems: mockDataSize,
//       items: {
//         $ref: 'curriculum'
//       },
//       uniqueItems: true
//     }
//   },
//   required: ['curriculum']
// };

// export const curriculumDef = {
//   id: 'curriculum',
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
//       faker: 'lorem.sentence'
//     },
//     focuses: {
//       type: 'array',
//       minItems: 1,
//       maxItems: 10,
//       items: {
//         $ref: 'focus'
//       },
//       uniqueItems: true
//     },
//     skills: {
//       type: 'array',
//       minItems: 1,
//       maxItems: 10,
//       items: {
//         $ref: 'skill'
//       },
//       uniqueItems: true
//     }
//   },
//   required: ['id', 'active', 'name', 'focuses', 'skills']
// };
