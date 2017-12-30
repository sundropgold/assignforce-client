import {Skill} from './skill';

export interface Trainer {
  trainerId: number;
  firstName: string;
  lastName: string;
  skills: number[];
  skillsObject: Skill[];
  certifications: any;
  active: boolean;
  resume: string;
}
