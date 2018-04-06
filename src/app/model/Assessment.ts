export class Assessment {
  assessmentId: number;
  title: string;
  batch: Batch;
  rawScore: number;
  type: AssessmentType;
  week: number;
  category: Category;
  grades: Grade[];

  constructor(
    assessmentId: number,
    title: string,
    batch: Batch,
    rawScore: number,
    type: AssessmentType,
    week: number,
    category: Category,
    grades: Grade[]
  ) {
    this.assessmentId = assessmentId;
    this.title = title;
    this.batch = batch;
    this.rawScore = rawScore;
    this.type = type;
    this.week = week;
    this.category = category;
    this.grades = grades;
  }
}
