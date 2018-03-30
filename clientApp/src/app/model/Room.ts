import { Unavailablity } from './unavailability';

export class Room {
  roomID: number;
  active: boolean;
  roomName: string;
  unavailabilities: Unavailablity[];
}
