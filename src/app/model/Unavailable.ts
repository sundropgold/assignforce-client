export class Unavailable {
  unavailableId: number;
  startDate: number;
  endDate: number;

  constructor(unavailableId: number, startDate: number, endDate: number) {
    this.unavailableId = unavailableId;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
