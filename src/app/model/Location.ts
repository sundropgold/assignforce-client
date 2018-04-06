import { Building } from './Building';

export class Location {
  id: number;
  name: string;
  city: string;
  state: string;
  active: boolean;
  buildings: Building[];

  constructor(id: number, name: string, city: string, state: string, buildings: Building[]) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.state = state;
    this.buildings = buildings;
  }
}
