import { Unavailability } from './Unavailability';

export class Room {
  roomID: number;
  active: boolean;
  roomName: string;
  building: number;
  unavailabilities: Unavailability[];

  constructor(roomID: number, active: boolean, roomName: string, building: number, unavailabilities: Unavailability[]) {
    this.roomID = roomID;
    this.active = active;
    this.roomName = roomName;
    this.building = building;
    this.unavailabilities = unavailabilities;
  }
}
