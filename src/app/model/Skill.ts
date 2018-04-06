import { Assessment } from './Assessment';

export class Skill {
  id: number;
  skillName: string;
  active: boolean;
  assessments: Assessment;

  constructor(id: number, skillName: string, active: boolean, assessments: Assessment) {
    this.id = id;
    this.skillName = skillName;
    this.active = active;
    this.assessments = assessments;
  }
}
