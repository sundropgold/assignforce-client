import {Batch} from "./Batch";
import {Category} from "./Category";
import {Grade} from "./Grade";
import {AssessmentType} from "./AssessmentType";

export class Assessment {
  id: number;
  title: string;
  batch: Batch;
  rawScore: number;
  type: AssessmentType;
  week: number;
  category: Category;
  grades: Grade[];

  constructor(
    id: number,
    title: string,
    batch: Batch,
    rawScore: number,
    type: AssessmentType,
    week: number,
    category: Category,
    grades: Grade[]
  ) {
    this.id = id;
    this.title = title;
    this.batch = batch;
    this.rawScore = rawScore;
    this.type = type;
    this.week = week;
    this.category = category;
    this.grades = grades;
  }
}
