export class BatchStatus {
  id: number;
  batchStatusName: string;

  constructor(id: number, batchStatusName: string) {
    this.id = id;
    this.batchStatusName = batchStatusName;
  }
}
