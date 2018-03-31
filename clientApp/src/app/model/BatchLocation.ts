export class BatchLocation {
  id: number;
  locationId: number;
  locationName: string;
  buildingId: number;
  buildingName: string;
  roomId: number;
  roomName: string;

  constructor(
    id: number,
    locationId: number,
    locationName: string,
    buildingId: number,
    buildingName: string,
    roomId: number,
    roomName: string
  ) {
    this.id = id;
    this.locationId = locationId;
    this.locationName = locationName;
    this.buildingId = buildingId;
    this.buildingName = buildingName;
    this.roomId = roomId;
    this.roomName = roomName;
  }
}
