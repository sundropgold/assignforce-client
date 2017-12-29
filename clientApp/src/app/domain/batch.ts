// everything is a string right now for testin.
// we will change things accordingly when we make the other POJOS

import {Curriculum} from './curriculum';
import {Trainer} from './trainer';

export interface Batch {
  name: string;
  startDate: Date;
  endDate: Date;
  curriculum: number;
  focus: number;
  trainer: number;
  cotrainer: number;
  batchStatus: BatchStatus;
  batchLocation: BatchLocation;
  skills: number[];
  id: number;
  progress: number;
}

export interface BatchStatus {
  batchStatusID: number;
  batchStatusName: String;
}

export interface BatchLocation {
  locationId: number;
  locationName: String;
  buildingId: number;
  buildingName: String;
  roomId: number;
  roomName: String;
}
