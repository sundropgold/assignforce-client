import { Skill } from './Skill';
import { Unavailability } from './Unavailability';

export class Trainer {
  trainerId: number;
  firstName: string;
  lastName: string;
  skills: Skill[];
  certifications: any;
  active: boolean;
  resume: any;
  unavailabilities: Unavailability[];

  constructor(
    trainerId: number,
    firstName: string,
    lastName: string,
    skills: Skill[],
    certifications: any,
    active: boolean,
    resume: any,
    unavailabilities: Unavailability[]
  ) {
    this.trainerId = trainerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
    this.certifications = certifications;
    this.active = active;
    this.resume = resume;
    this.unavailabilities = unavailabilities;
  }
}
