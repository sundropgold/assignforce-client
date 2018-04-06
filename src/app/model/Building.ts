import { Room } from './Room';

export class Building {
  active: boolean;
  buildingId: number;
  location: number;
  name: string;
  rooms: Room[];

  constructor(active: boolean, buildingId: number, location: number, name: string, rooms: Room[]) {
    this.active = active;
    this.buildingId = buildingId;
    this.location = location;
    this.name = name;
    this.rooms = rooms;
  }
}
