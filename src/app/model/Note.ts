import { Batch } from './Batch';

export class Note {
  id: number;
  content: string;
  week: number;
  batch: Batch;
  trainee: Trainee;
  maxVisibility: TrainerRole;
  type: NoteType;
  qcFeedback: boolean;
  qcStatus: QCStatus;

  constructor(
    id: number,
    content: string,
    week: number,
    batch: Batch,
    trainee: Trainee,
    maxVisibility: TrainerRole,
    type: NoteType,
    qcFeedback: boolean,
    qcStatus: QCStatus
  ) {
    this.id = id;
    this.content = content;
    this.week = week;
    this.batch = batch;
    this.trainee = trainee;
    this.maxVisibility = maxVisibility;
    this.type = type;
    this.qcFeedback = qcFeedback;
    this.qcStatus = qcStatus;
  }
}
