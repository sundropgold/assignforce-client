import { Unavailable } from './Unavailable';

export class Room {
  roomId: number;
  active: boolean;
  roomName: string;
  building: number;
  // unavailabilities: Unavailability[];

  constructor(roomId: number, active: boolean, roomName: string, building: number) {
    this.roomId = roomId;
    this.active = active;
    this.roomName = roomName;
    this.building = building;
    // this.unavailabilities = unavailabilities;
  }
}
