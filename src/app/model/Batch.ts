import { Curriculum } from './Curriculum';
import { Trainer } from './Trainer';
import { Skill } from './Skill';
import { BatchStatus } from './BatchStatus';
import { BatchLocation } from './BatchLocation';
import { Address } from './Address';

export class Batch {
  id: number;
  resourceId: string;
  trainingName: string;
  skillType: SkillType;
  trainingType: TrainingType;
  startDate: number;
  endDate: number;
  location: string;
  address: Address;
  goodGradeThreshold: number;
  borderlineGradeThreshold: number;
  trainees: Trainee;
  weeks: number;
  gradedWeeks: number;
  notes: Note[];

  constructor(
    id: number,
    resourceId: string,
    trainingName: string,
    skillType: SkillType,
    trainingType: TrainingType,
    startDate: number,
    endDate: number,
    location: string,
    address: Address,
    goodGradeThreshold: number,
    borderlineGradeThreshold: number,
    trainees: Trainee,
    weeks: number,
    gradedWeeks: number,
    notes: Note[]
  ) {
    this.id = id;
    this.resourceId = resourceId;
    this.trainingName = trainingName;
    this.skillType = skillType;
    this.trainingType = trainingType;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.address = address;
    this.goodGradeThreshold = goodGradeThreshold;
    this.borderlineGradeThreshold = borderlineGradeThreshold;
    this.trainees = trainees;
    this.weeks = weeks;
    this.gradedWeeks = gradedWeeks;
    this.notes = notes;
  }
}

// name: string;
// curriculum: Curriculum;
// focus: Curriculum;
// trainer: Trainer;
// cotrainer: Trainer;
// skills: Skill[];
// batchStatus: BatchStatus;
// batchLocation: BatchLocation;
