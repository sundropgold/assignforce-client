import { Skill } from './skill';

export class Trainer {
  trainerId: number;
  firstName: string;
  lastName: string;
  skills: Skill[];
  certifications: any;
  active: boolean;
  resume: string;
}
