import { Building } from './Building';

export class Location {
  locationId: number;
  name: string;
  city: string;
  state: string;
  active: boolean;
  buildings: Building[];

  constructor(locationId: number, name: string, city: string, state: string, active: boolean, buildings: Building[]) {
    this.locationId = locationId;
    this.name = name;
    this.city = city;
    this.state = state;
    this.active = active;
    this.buildings = buildings;
  }
}
