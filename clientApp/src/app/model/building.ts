import { Room } from './Room';

export class Building {
  active: boolean;
  id: number;
  location: number;
  name: string;
  rooms: Room[];

  constructor(active: boolean, id: number, location: number, name: string, rooms: Room[]) {
    this.active = active;
    this.id = id;
    this.location = location;
    this.name = name;
    this.rooms = rooms;
  }
}
