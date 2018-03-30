import { Curriculum } from '../model/curriculum';
import { Trainer } from '../model/trainer';
import { Location } from '../model/location';
import { Skill } from './skill';
import { BatchStatus } from './batchStatus';
export class Batch {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  curriculum: Curriculum;
  focus: Curriculum;
  trainer: Trainer;
  cotrainer: Trainer;
  skills: Skill;
  batchStatus: BatchStatus;
  batchLocation: Location;
}
