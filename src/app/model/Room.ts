import { Unavailable } from './Unavailable';

export class Room {
  id: number;
  active: boolean;
  roomName: string;
  building: number;
  // unavailabilities: Unavailability[];

  constructor(id: number, active: boolean, roomName: string, building: number) {
    this.id = id;
    this.active = active;
    this.roomName = roomName;
    this.building = building;
    // this.unavailabilities = unavailabilities;
  }
}
