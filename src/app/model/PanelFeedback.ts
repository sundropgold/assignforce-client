import { Skill } from './Skill';
import { Panel } from './Panel';

export class PanelFeedback {
  panelFeedbackId: number;
  technology: Skill;
  status: PanelStatus;
  result: number;
  comment: string;
  panel: Panel;

  constructor(
    panelFeedbackId: number,
    technology: Skill,
    status: PanelStatus,
    result: number,
    comment: string,
    panel: Panel
  ) {
    this.panelFeedbackId = panelFeedbackId;
    this.technology = technology;
    this.status = status;
    this.result = result;
    this.comment = comment;
    this.panel = panel;
  }
}
