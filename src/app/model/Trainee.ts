import { Batch } from './Batch';
import { Grade } from './Grade';
import { Note } from './Note';
import { Panel } from './Panel';

export class Trainee {
  traineeId: number;
  resourceId: string;
  name: string;
  email: string;
  trainingStatus: TrainingStatus;
  batch: Batch;
  phoneNumber: string;
  skypeId: string;
  profileUrl: string;
  recruiterName: string;
  college: string;
  degree: string;
  major: string;
  techScreenerName: string;
  projectCompletion: string;
  grades: Grade[];
  notes: Note[];
  panelInterviews: Panel[];

  constructor(
    traineeId: number,
    resourceId: string,
    name: string,
    email: string,
    trainingStatus: TrainingStatus,
    batch: Batch,
    phoneNumber: string,
    skypeId: string,
    profileUrl: string,
    recruiterName: string,
    college: string,
    degree: string,
    major: string,
    techScreenerName: string,
    projectCompletion: string,
    grades: Grade[],
    notes: Note[],
    panelInterviews: Panel[]
  ) {
    this.traineeId = traineeId;
    this.resourceId = resourceId;
    this.name = name;
    this.email = email;
    this.trainingStatus = trainingStatus;
    this.batch = batch;
    this.phoneNumber = phoneNumber;
    this.skypeId = skypeId;
    this.profileUrl = profileUrl;
    this.recruiterName = recruiterName;
    this.college = college;
    this.degree = degree;
    this.major = major;
    this.techScreenerName = techScreenerName;
    this.projectCompletion = projectCompletion;
    this.grades = grades;
    this.notes = notes;
    this.panelInterviews = panelInterviews;
  }
}
