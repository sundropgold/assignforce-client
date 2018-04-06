import { Building } from '../../model/Building';

export const buildings: Building[] = [
  {
    name: 'Testing',
    location: 5,
    active: false,
    rooms: [],
    id: 52
  },
  {
    name: 'Chicago',
    location: 45,
    active: true,
    rooms: [],
    id: 64
  },
  {
    name: '11730 Plaza American Drive (HQ)',
    location: 1,
    active: true,
    rooms: [
      {
        roomID: 7,
        roomName: '208',
        building: 1,
        unavailabilities: [
          {
            startDate: 1495425600000,
            endDate: 1501214400000,
            id: 233
          },
          {
            startDate: 1500868800000,
            endDate: 1506657600000,
            id: 312
          },
          {
            startDate: 1493006400000,
            endDate: 1493956800000,
            id: 43
          },
          {
            startDate: 1493006400000,
            endDate: 1493956800000,
            id: 532
          },
          {
            startDate: 1494216000000,
            endDate: 1500004800000,
            id: 530
          }
        ],
        active: true
      },
      {
        roomID: 1,
        roomName: '201',
        building: 1,
        unavailabilities: [
          {
            startDate: 1490587200000,
            endDate: 1496376000000,
            id: 12
          },
          {
            startDate: 1499659200000,
            endDate: 1505448000000,
            id: 258
          }
        ],
        active: true
      },
      {
        roomID: 2,
        roomName: '202',
        building: 1,
        unavailabilities: [
          {
            startDate: 1494216000000,
            endDate: 1495166400000,
            id: 211
          },
          {
            startDate: 1502078400000,
            endDate: 1507867200000,
            id: 318
          },
          {
            startDate: 1488171600000,
            endDate: 1493956800000,
            id: 33
          },
          {
            startDate: 1498449600000,
            endDate: 1504238400000,
            id: 316
          }
        ],
        active: true
      },
      {
        roomID: 3,
        roomName: '204',
        building: 1,
        unavailabilities: [
          {
            startDate: 1479099600000,
            endDate: 1484283600000,
            id: 4
          },
          {
            startDate: 1493006400000,
            endDate: 1498795200000,
            id: 201
          },
          {
            startDate: 1505102400000,
            endDate: 1510894800000,
            id: 528
          }
        ],
        active: true
      },
      {
        roomID: 4,
        roomName: '205',
        building: 1,
        unavailabilities: [
          {
            startDate: 1498449600000,
            endDate: 1504238400000,
            id: 238
          },
          {
            startDate: 1491796800000,
            endDate: 1497585600000,
            id: 37
          }
        ],
        active: true
      },
      {
        roomID: 5,
        roomName: 'X1',
        building: 1,
        unavailabilities: [],
        active: false
      },
      {
        roomID: 6,
        roomName: '207',
        building: 1,
        unavailabilities: [
          {
            startDate: 1489982400000,
            endDate: 1495771200000,
            id: 6
          },
          {
            startDate: 1489982400000,
            endDate: 1495771200000,
            id: 10
          },
          {
            startDate: 1497844800000,
            endDate: 1503633600000,
            id: 254
          }
        ],
        active: true
      },
      {
        roomID: 100,
        roomName: 'X2',
        building: 1,
        unavailabilities: [],
        active: false
      },
      {
        roomID: 101,
        roomName: 'X3',
        building: 1,
        unavailabilities: [],
        active: false
      },
      {
        roomID: 122,
        roomName: '209',
        building: 1,
        unavailabilities: [
          {
            startDate: 1495425600000,
            endDate: 1501214400000,
            id: 218
          },
          {
            startDate: 1502683200000,
            endDate: 1508472000000,
            id: 349
          }
        ],
        active: true
      },
      {
        roomID: 102,
        roomName: '203',
        building: 1,
        unavailabilities: [
          {
            startDate: 1494820800000,
            endDate: 1500609600000,
            id: 213
          },
          {
            startDate: 1494820800000,
            endDate: 1500609600000,
            id: 47
          }
        ],
        active: true
      },
      {
        roomID: 103,
        roomName: '206',
        building: 1,
        unavailabilities: [],
        active: true
      },
      {
        roomID: 142,
        roomName: '214',
        building: 1,
        unavailabilities: [
          {
            startDate: 1500868800000,
            endDate: 1506657600000,
            id: 314
          }
        ],
        active: true
      }
    ],
    id: 1
  }
];
