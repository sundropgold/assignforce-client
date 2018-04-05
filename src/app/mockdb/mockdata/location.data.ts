import { Location } from '../../model/Location';

export const locations: Location[] = [
  {
    id: 1,
    name: 'Revature HQ',
    city: 'Reston',
    state: 'VA',
    active: true,
    buildings: [
      {
        id: 1,
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
              }
            ],
            active: true
          },
          {
            active: true,
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
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Tempe',
    city: 'ASU',
    state: 'AZ',
    active: true,
    buildings: [
      {
        id: 2,
        name: 'ASU Building 1',
        location: 2,
        active: true,
        rooms: []
      }
    ]
  },
  {
    id: 4,
    name: 'USF',
    city: 'Tempa',
    state: 'FL',
    active: true,
    buildings: []
  }
];
