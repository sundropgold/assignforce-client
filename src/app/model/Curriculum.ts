import { Skill } from './Skill';

export class Curriculum {
  id: number;
  name: string;
  core: boolean;
  active: boolean;
  skills: Skill[];

  constructor(id: number, name: string, core: boolean, active: boolean, skills: Skill[]) {
    this.id = id;
    this.name = name;
    this.core = core;
    this.active = active;
    this.skills = skills;
  }
}
