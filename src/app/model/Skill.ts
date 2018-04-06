import { Assessment } from './Assessment';

export class Skill {
  skillId: number;
  skillName: string;
  active: boolean;
  assessments: Assessment;

  constructor(skillId: number, skillName: string, active: boolean, assessments: Assessment) {
    this.skillId = skillId;
    this.skillName = skillName;
    this.active = active;
    this.assessments = assessments;
  }
}
