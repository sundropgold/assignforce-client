import { Room } from './room';

export class Building {
  active: boolean;
  id: number;
  location: number;
  name: string;
  rooms: Room[];
}
