import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemDbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const locations = [
      {
        id: '13F',
        name: 'Revature HQ',
        city: 'Reaston',
        state: 'VA',
        buildings: [
          {
            name: 'Building 1',
            rooms: [
              {
                name: 'Room 101'
              },
              {
                name: 'Room 102'
              }
            ]
          },
          {
            name: 'Building 2',
            rooms: [
              {
                name: 'Room 201'
              },
              {
                name: 'Room 202'
              }
            ]
          }
        ]
      },
      {
        id: '13E',
        name: 'CUNY',
        city: 'New York',
        state: 'NY',
        buildings: [
          {
            name: 'SPS',
            rooms: [
              {
                name: 'Room 216'
              },
              {
                name: 'Room 220'
              }
            ]
          },
          {
            name: 'Queens College',
            rooms: [
              {
                name: 'Room 301'
              },
              {
                name: 'Room 302'
              }
            ]
          }
        ]
      }
    ];
    return { locations };
  }
}
