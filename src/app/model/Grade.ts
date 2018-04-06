import { Assessment } from './Assessment';

export class Grade {
  gradeId: number;
  assessment: Assessment[];
  trainee: Trainee;
  dateReceived: string;
  score: number;

  constructor(gradeId: number, assessment: Assessment[], trainee: Trainee, dateReceived: string, score: number) {
    this.gradeId = gradeId;
    this.assessment = assessment;
    this.trainee = trainee;
    this.dateReceived = dateReceived;
    this.score = score;
  }
}
