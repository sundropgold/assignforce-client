import { Batch } from './Batch';

export class Note {
  noteId: number;
  content: string;
  week: number;
  batch: Batch;
  trainee: Trainee;
  maxVisibility: TrainerRole;
  type: NoteType;
  qcFeedback: boolean;
  qcStatus: QCStatus;

  constructor(
    noteId: number,
    content: string,
    week: number,
    batch: Batch,
    trainee: Trainee,
    maxVisibility: TrainerRole,
    type: NoteType,
    qcFeedback: boolean,
    qcStatus: QCStatus
  ) {
    this.noteId = noteId;
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
