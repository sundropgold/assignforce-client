import { Room } from './Room';

export class Building {
  active: boolean;
  id: number;
  location: number;
  name: string;
  rooms: Room[];
}
