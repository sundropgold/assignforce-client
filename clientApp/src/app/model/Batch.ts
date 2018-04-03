import { Curriculum } from './Curriculum';
import { Trainer } from './Trainer';
import { Skill } from './Skill';
import { BatchStatus } from './BatchStatus';
import { BatchLocation } from './BatchLocation';

export class Batch {
  id: number;
  name: string;
  startDate: number;
  endDate: number;
  curriculum: Curriculum;
  focus: Curriculum;
  trainer: Trainer;
  cotrainer: Trainer;
  skills: Skill[];
  batchStatus: BatchStatus;
  batchLocation: BatchLocation;

  constructor(
    id: number,
    name: string,
    startDate: number,
    endDate: number,
    curriculum: Curriculum,
    focus: Curriculum,
    trainer: Trainer,
    cotrainer: Trainer,
    skills: Skill[],
    batchStatus: BatchStatus,
    batchLocation: BatchLocation
  ) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.curriculum = curriculum;
    this.focus = focus;
    this.trainer = trainer;
    this.cotrainer = cotrainer;
    this.skills = skills;
    this.batchStatus = batchStatus;
    this.batchLocation = batchLocation;
  }
}
