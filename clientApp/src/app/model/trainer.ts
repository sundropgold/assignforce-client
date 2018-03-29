import { Skill } from './skill';
import { Unavailablity } from './unavailability';

export class Trainer {
  trainerId: number;
  firstName: string;
  lastName: string;
  skills: Skill[];
  certifications: any;
  active: boolean;
  unavailabilities: Unavailablity;
}
