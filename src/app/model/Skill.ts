export class Skill {
  skillId: number;
  name: string;
  active: boolean;

  constructor(skillId: number, name: string, active: boolean) {
    this.skillId = skillId;
    this.name = name;
    this.active = active;
  }
}
