import { Assessment } from './Assessment';

export class Grade {
  id: number;
  assessment: Assessment[];
  trainee: Trainee;
  dateReceived: string;
  score: number;

  constructor(id: number, assessment: Assessment[], trainee: Trainee, dateReceived: string, score: number) {
    this.id = id;
    this.assessment = assessment;
    this.trainee = trainee;
    this.dateReceived = dateReceived;
    this.score = score;
  }
}
