import { Skill } from './Skill';
import { Unavailable } from './Unavailable';
import { Batch } from './Batch';

export class Trainer {
  trainerId: number;
  name: string;
  title: string;
  email: string;
  tier: TrainerRole;
  batches: Batch[];

  constructor(trainerId: number, name: string, title: string, email: string, tier: TrainerRole, batches: Batch[]) {
    this.trainerId = trainerId;
    this.name = name;
    this.title = title;
    this.email = email;
    this.tier = tier;
    this.batches = batches;
  }
}

// firstName: string;
// lastName: string;
// skills: Skill[];
// certifications: any;
// active: boolean;
// resume: any;
// unavailabilities: Unavailability[];
