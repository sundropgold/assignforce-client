export class Panel {
  id: number;
  trainee: Trainee;
  panelList: Trainer;
  interviewDate: string;
  duration: string;
  format: InterviewFormat;
  internet: string;
  panelRound: number;
  recordingConsent: boolean;
  recordingLink: string;
  status: PanelStatus;
  feedback: PanelFeedback[];
  associateIntro: string;
  projectOneDescription: string;
  projectTwoDescription: string;
  projectThreeDescription: string;
  communicationSkills: string;
  overall: string;

  constructor(
    id: number,
    trainee: Trainee,
    panelList: Trainer,
    interviewDate: string,
    duration: string,
    format: InterviewFormat,
    internet: string,
    panelRound: number,
    recordingConsent: boolean,
    recordingLink: string,
    status: PanelStatus,
    feedback: PanelFeedback[],
    associateIntro: string,
    projectOneDescription: string,
    projectTwoDescription: string,
    projectThreeDescription: string,
    communicationSkills: string,
    overall: string
  ) {
    this.id = id;
    this.trainee = trainee;
    this.panelList = panelList;
    this.interviewDate = interviewDate;
    this.duration = duration;
    this.format = format;
    this.internet = internet;
    this.panelRound = panelRound;
    this.recordingConsent = recordingConsent;
    this.recordingLink = recordingLink;
    this.status = status;
    this.feedback = feedback;
    this.associateIntro = associateIntro;
    this.projectOneDescription = projectOneDescription;
    this.projectTwoDescription = projectTwoDescription;
    this.projectThreeDescription = projectThreeDescription;
    this.communicationSkills = communicationSkills;
    this.overall = overall;
  }
}
