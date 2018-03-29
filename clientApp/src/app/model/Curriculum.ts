export class Curriculum {
  currId: number;
  name: string;
  core: boolean;
  active: boolean;
  skills: string[];

  constructor(currId: number, name: string, core: boolean, active: boolean, skills: string[]) {
    this.currId = currId;
    this.name = name;
    this.core = core;
    this.active = active;
    this.skills = skills;
  }
}
