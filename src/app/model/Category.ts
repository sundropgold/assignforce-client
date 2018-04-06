import { Assessment } from './Assessment';

export class Category {
  categoryId: number;
  skillCategory: string;
  active: boolean;
  assessments: Assessment[];

  constructor(categoryId: number, skillCategory: string, active: boolean, assessments: Assessment[]) {
    this.categoryId = categoryId;
    this.skillCategory = skillCategory;
    this.active = active;
    this.assessments = assessments;
  }
}
