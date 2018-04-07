// import { Batch } from '../../model/Batch';
// import { trainers } from './trainer.data';
//
// export const batches: Batch[] = [
//   {
//     id: 187,
//     name: '1708 Aug14 Java',
//     startDate: 1502683200000,
//     endDate: 1508472000000,
//     curriculum: {
//       id: 1,
//       name: 'Java',
//       skills: [
//         {
//           id: 4,
//           name: 'AngularJS',
//           active: true
//         },
//         {
//           id: 1,
//           name: 'Core Java',
//           active: true
//         },
//         {
//           id: 2,
//           name: 'JUnit',
//           active: true
//         },
//         {
//           id: 3,
//           name: 'Spring',
//           active: true
//         },
//         {
//           id: 50,
//           name: 'Java Servlets',
//           active: true
//         },
//         {
//           id: 51,
//           name: 'JSP',
//           active: true
//         },
//         {
//           id: 25,
//           name: 'Oracle SQL',
//           active: true
//         },
//         {
//           id: 48,
//           name: 'JDBC',
//           active: true
//         },
//         {
//           id: 49,
//           name: 'HTML',
//           active: true
//         },
//         {
//           id: 52,
//           name: 'Freemarker',
//           active: true
//         },
//         {
//           id: 53,
//           name: 'CSS',
//           active: true
//         },
//         {
//           id: 54,
//           name: 'jQuery',
//           active: true
//         },
//         {
//           id: 55,
//           name: 'Hibernate',
//           active: true
//         },
//         {
//           id: 56,
//           name: 'REST',
//           active: true
//         },
//         {
//           id: 57,
//           name: 'SOAP',
//           active: true
//         }
//       ],
//       active: true,
//       core: true
//     },
//     focus: null,
//     trainer: trainers[0],
//     cotrainer: {
//       id: 36,
//       firstName: 'Mehrab',
//       lastName: 'Rahman',
//       resume: null,
//       unavailabilities: [
//         {
//           startDate: 1512363600000,
//           endDate: 1518757200000,
//           id: 490
//         },
//         {
//           startDate: 1521432000000,
//           endDate: 1527220800000,
//           id: 609
//         }
//       ],
//       skills: [
//         {
//           id: 4,
//           name: 'AngularJS',
//           active: true
//         },
//         {
//           id: 1,
//           name: 'Core Java',
//           active: true
//         },
//         {
//           id: 2,
//           name: 'JUnit',
//           active: true
//         },
//         {
//           id: 5,
//           name: 'Selenium/WebDriver',
//           active: true
//         },
//         {
//           id: 3,
//           name: 'Spring',
//           active: true
//         },
//         {
//           id: 50,
//           name: 'Java Servlets',
//           active: true
//         },
//         {
//           id: 51,
//           name: 'JSP',
//           active: true
//         },
//         {
//           id: 25,
//           name: 'Oracle SQL',
//           active: true
//         },
//         {
//           id: 48,
//           name: 'JDBC',
//           active: true
//         },
//         {
//           id: 49,
//           name: 'HTML',
//           active: true
//         },
//         {
//           id: 53,
//           name: 'CSS',
//           active: true
//         },
//         {
//           id: 55,
//           name: 'Hibernate',
//           active: true
//         },
//         {
//           id: 56,
//           name: 'REST',
//           active: true
//         },
//         {
//           id: 57,
//           name: 'SOAP',
//           active: true
//         },
//         {
//           id: 69,
//           name: 'TestNG',
//           active: true
//         },
//         {
//           id: 68,
//           name: 'Cucumber',
//           active: true
//         }
//       ],
//       certifications: [],
//       active: true
//     },
//     skills: [],
//     batchLocation: {
//       id: 22,
//       locationId: 1,
//       locationName: 'Revature HQ',
//       buildingId: 1,
//       buildingName: '11730 Plaza American Drive (HQ)',
//       roomId: 122,
//       roomName: '209'
//     }
//   },
//   {
//     id: 191,
//     name: '1610 Oct24 Java',
//     startDate: 1477281600000,
//     endDate: 1483678800000,
//     curriculum: {
//       id: 1,
//       name: 'Java',
//       skills: [
//         {
//           id: 4,
//           name: 'AngularJS',
//           active: true
//         },
//         {
//           id: 1,
//           name: 'Core Java',
//           active: true
//         },
//         {
//           id: 2,
//           name: 'JUnit',
//           active: true
//         },
//         {
//           id: 3,
//           name: 'Spring',
//           active: true
//         },
//         {
//           id: 50,
//           name: 'Java Servlets',
//           active: true
//         },
//         {
//           id: 51,
//           name: 'JSP',
//           active: true
//         },
//         {
//           id: 25,
//           name: 'Oracle SQL',
//           active: true
//         },
//         {
//           id: 48,
//           name: 'JDBC',
//           active: true
//         },
//         {
//           id: 49,
//           name: 'HTML',
//           active: true
//         },
//         {
//           id: 52,
//           name: 'Freemarker',
//           active: true
//         },
//         {
//           id: 53,
//           name: 'CSS',
//           active: true
//         },
//         {
//           id: 54,
//           name: 'jQuery',
//           active: true
//         },
//         {
//           id: 55,
//           name: 'Hibernate',
//           active: true
//         },
//         {
//           id: 56,
//           name: 'REST',
//           active: true
//         },
//         {
//           id: 57,
//           name: 'SOAP',
//           active: true
//         }
//       ],
//       active: true,
//       core: true
//     },
//     focus: null,
//     batchStatus: {
//       id: 1,
//       batchStatusName: 'Scheduled'
//     },
//     trainer: trainers[3],
//     cotrainer: {
//       id: 10,
//       firstName: 'Richard',
//       lastName: 'Orr',
//       resume: null,
//       unavailabilities: [
//         {
//           startDate: 1477281600000,
//           endDate: 1481259600000,
//           id: 1
//         },
//         {
//           startDate: 1498449600000,
//           endDate: 1504238400000,
//           id: 208
//         },
//         {
//           startDate: 1508731200000,
//           endDate: 1513314000000,
//           id: 468
//         },
//         {
//           startDate: 1515387600000,
//           endDate: 1521172800000,
//           id: 491
//         }
//       ],
//       skills: [],
//       certifications: [],
//       active: true
//     },
//     skills: [
//       {
//         id: 1,
//         name: 'Core Java',
//         active: true
//       },
//       {
//         id: 2,
//         name: 'JUnit',
//         active: true
//       },
//       {
//         id: 3,
//         name: 'Spring',
//         active: true
//       },
//       {
//         id: 4,
//         name: 'AngularJS',
//         active: true
//       },
//       {
//         id: 25,
//         name: 'Oracle SQL',
//         active: true
//       },
//       {
//         id: 48,
//         name: 'JDBC',
//         active: true
//       },
//       {
//         id: 49,
//         name: 'HTML',
//         active: true
//       },
//       {
//         id: 50,
//         name: 'Java Servlets',
//         active: true
//       },
//       {
//         id: 51,
//         name: 'JSP',
//         active: true
//       },
//       {
//         id: 52,
//         name: 'Freemarker',
//         active: true
//       },
//       {
//         id: 53,
//         name: 'CSS',
//         active: true
//       },
//       {
//         id: 54,
//         name: 'jQuery',
//         active: true
//       },
//       {
//         id: 55,
//         name: 'Hibernate',
//         active: true
//       },
//       {
//         id: 56,
//         name: 'REST',
//         active: true
//       },
//       {
//         id: 57,
//         name: 'SOAP',
//         active: true
//       }
//     ],
//     batchLocation: {
//       id: 23,
//       locationId: 1,
//       locationName: 'Revature HQ',
//       buildingId: null,
//       buildingName: null,
//       roomId: null,
//       roomName: null
//     }
//   },
//   {
//     id: 191,
//     name: '1710 Mar8 Java',
//     startDate: new Date(2017, 3, 8).valueOf(),
//     endDate: new Date(2017, 5, 28).valueOf(),
//     curriculum: {
//       id: 1,
//       name: 'Java',
//       skills: [
//         {
//           id: 4,
//           name: 'AngularJS',
//           active: true
//         },
//         {
//           id: 1,
//           name: 'Core Java',
//           active: true
//         },
//         {
//           id: 2,
//           name: 'JUnit',
//           active: true
//         },
//         {
//           id: 3,
//           name: 'Spring',
//           active: true
//         },
//         {
//           id: 50,
//           name: 'Java Servlets',
//           active: true
//         },
//         {
//           id: 51,
//           name: 'JSP',
//           active: true
//         },
//         {
//           id: 25,
//           name: 'Oracle SQL',
//           active: true
//         },
//         {
//           id: 48,
//           name: 'JDBC',
//           active: true
//         },
//         {
//           id: 49,
//           name: 'HTML',
//           active: true
//         },
//         {
//           id: 52,
//           name: 'Freemarker',
//           active: true
//         },
//         {
//           id: 53,
//           name: 'CSS',
//           active: true
//         },
//         {
//           id: 54,
//           name: 'jQuery',
//           active: true
//         },
//         {
//           id: 55,
//           name: 'Hibernate',
//           active: true
//         },
//         {
//           id: 56,
//           name: 'REST',
//           active: true
//         },
//         {
//           id: 57,
//           name: 'SOAP',
//           active: true
//         }
//       ],
//       active: true,
//       core: true
//     },
//     focus: null,
//     batchStatus: {
//       id: 1,
//       batchStatusName: 'Scheduled'
//     },
//     trainer: trainers[3],
//     cotrainer: {
//       id: 10,
//       firstName: 'Richard',
//       lastName: 'Orr',
//       resume: null,
//       unavailabilities: [
//         {
//           startDate: 1477281600000,
//           endDate: 1481259600000,
//           id: 1
//         },
//         {
//           startDate: 1498449600000,
//           endDate: 1504238400000,
//           id: 208
//         },
//         {
//           startDate: 1508731200000,
//           endDate: 1513314000000,
//           id: 468
//         },
//         {
//           startDate: 1515387600000,
//           endDate: 1521172800000,
//           id: 491
//         }
//       ],
//       skills: [],
//       certifications: [],
//       active: true
//     },
//     skills: [
//       {
//         id: 1,
//         name: 'Core Java',
//         active: true
//       },
//       {
//         id: 2,
//         name: 'JUnit',
//         active: true
//       },
//       {
//         id: 3,
//         name: 'Spring',
//         active: true
//       },
//       {
//         id: 4,
//         name: 'AngularJS',
//         active: true
//       },
//       {
//         id: 25,
//         name: 'Oracle SQL',
//         active: true
//       },
//       {
//         id: 48,
//         name: 'JDBC',
//         active: true
//       },
//       {
//         id: 49,
//         name: 'HTML',
//         active: true
//       },
//       {
//         id: 50,
//         name: 'Java Servlets',
//         active: true
//       },
//       {
//         id: 51,
//         name: 'JSP',
//         active: true
//       },
//       {
//         id: 52,
//         name: 'Freemarker',
//         active: true
//       },
//       {
//         id: 53,
//         name: 'CSS',
//         active: true
//       },
//       {
//         id: 54,
//         name: 'jQuery',
//         active: true
//       },
//       {
//         id: 55,
//         name: 'Hibernate',
//         active: true
//       },
//       {
//         id: 56,
//         name: 'REST',
//         active: true
//       },
//       {
//         id: 57,
//         name: 'SOAP',
//         active: true
//       }
//     ],
//     batchLocation: {
//       id: 23,
//       locationId: 1,
//       locationName: 'Revature HQ',
//       buildingId: null,
//       buildingName: null,
//       roomId: null,
//       roomName: null
//     }
//   },
//   {
//     id: 192,
//     name: '1611 Nov28 SDET',
//     startDate: 1480309200000,
//     endDate: 1486702800000,
//     curriculum: {
//       id: 3,
//       name: 'SDET',
//       skills: [
//         {
//           id: 5,
//           name: 'Selenium/WebDriver',
//           active: true
//         },
//         {
//           id: 47,
//           name: 'Core SDET',
//           active: true
//         },
//         {
//           id: 69,
//           name: 'TestNG',
//           active: true
//         },
//         {
//           id: 72,
//           name: 'Manual Testing',
//           active: true
//         },
//         {
//           id: 70,
//           name: 'Pyhton',
//           active: true
//         },
//         {
//           id: 71,
//           name: 'UFT',
//           active: true
//         },
//         {
//           id: 68,
//           name: 'Cucumber',
//           active: true
//         }
//       ],
//       active: true,
//       core: true
//     },
//     focus: null,
//     batchStatus: {
//       id: 1,
//       batchStatusName: 'Scheduled'
//     },
//     trainer: trainers[1],
//     cotrainer: null,
//     skills: [
//       {
//         id: 5,
//         name: 'Selenium/WebDriver',
//         active: true
//       },
//       {
//         id: 47,
//         name: 'Core SDET',
//         active: true
//       },
//       {
//         id: 69,
//         name: 'TestNG',
//         active: true
//       },
//       {
//         id: 72,
//         name: 'Manual Testing',
//         active: true
//       },
//       {
//         id: 70,
//         name: 'Pyhton',
//         active: true
//       },
//       {
//         id: 71,
//         name: 'UFT',
//         active: true
//       },
//       {
//         id: 68,
//         name: 'Cucumber',
//         active: true
//       }
//     ],
//     batchLocation: {
//       id: 24,
//       locationId: 1,
//       locationName: 'Revature HQ',
//       buildingId: null,
//       buildingName: null,
//       roomId: null,
//       roomName: null
//     }
//   },
//   {
//     id: 222,
//     name: 'short',
//     startDate: new Date(2018, 12, 5).valueOf(),
//     endDate: new Date(2018, 12, 18).valueOf(),
//     curriculum: {
//       id: 2,
//       name: '.NET',
//       skills: [
//         {
//           id: 5,
//           name: 'Selenium/WebDriver',
//           active: true
//         },
//         {
//           id: 47,
//           name: 'Core SDET',
//           active: true
//         },
//         {
//           id: 69,
//           name: 'TestNG',
//           active: true
//         },
//         {
//           id: 72,
//           name: 'Manual Testing',
//           active: true
//         },
//         {
//           id: 70,
//           name: 'Pyhton',
//           active: true
//         },
//         {
//           id: 71,
//           name: 'UFT',
//           active: true
//         },
//         {
//           id: 68,
//           name: 'Cucumber',
//           active: true
//         }
//       ],
//       active: true,
//       core: true
//     },
//     focus: null,
//     batchStatus: {
//       id: 1,
//       batchStatusName: 'Scheduled'
//     },
//     trainer: trainers[2],
//     cotrainer: null,
//     skills: [
//       {
//         id: 5,
//         name: 'Selenium/WebDriver',
//         active: true
//       },
//       {
//         id: 47,
//         name: 'Core SDET',
//         active: true
//       },
//       {
//         id: 69,
//         name: 'TestNG',
//         active: true
//       },
//       {
//         id: 72,
//         name: 'Manual Testing',
//         active: true
//       },
//       {
//         id: 70,
//         name: 'Pyhton',
//         active: true
//       },
//       {
//         id: 71,
//         name: 'UFT',
//         active: true
//       },
//       {
//         id: 68,
//         name: 'Cucumber',
//         active: true
//       }
//     ],
//     batchLocation: {
//       id: 1,
//       locationId: null,
//       locationName: null,
//       buildingId: null,
//       buildingName: null,
//       roomId: null,
//       roomName: null
//     }
//   }
// ];
