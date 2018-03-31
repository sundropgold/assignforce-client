import { Skill } from './Skill';

export class Curriculum {
  currId: number;
  name: string;
  core: boolean;
  active: boolean;
  skills: Skill[];

  constructor(currId: number, name: string, core: boolean, active: boolean, skills: Skill[]) {
    this.currId = currId;
    this.name = name;
    this.core = core;
    this.active = active;
    this.skills = skills;
  }
}
