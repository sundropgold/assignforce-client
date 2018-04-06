import { Assessment } from './Assessment';

export class Category {
  id: number;
  skillCategory: string;
  active: boolean;
  assessments: Assessment[];

  constructor(id: number, skillCategory: string, active: boolean, assessments: Assessment[]) {
    this.id = id;
    this.skillCategory = skillCategory;
    this.active = active;
    this.assessments = assessments;
  }
}
