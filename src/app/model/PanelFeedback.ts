import { Skill } from './Skill';
import { Panel } from './Panel';
import {PanelStatus} from "./PanelStatus";

export class PanelFeedback {
  id: number;
  technology: Skill;
  status: PanelStatus;
  result: number;
  comment: string;
  panel: Panel;

  constructor(id: number, technology: Skill, status: PanelStatus, result: number, comment: string, panel: Panel) {
    this.id = id;
    this.technology = technology;
    this.status = status;
    this.result = result;
    this.comment = comment;
    this.panel = panel;
  }
}
