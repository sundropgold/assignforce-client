export class BatchStatus {
  batchStatusID: number;
  batchStatusName: string;

  constructor(batchStatusID: number, batchStatusName: string) {
    this.batchStatusID = batchStatusID;
    this.batchStatusName = batchStatusName;
  }
}
