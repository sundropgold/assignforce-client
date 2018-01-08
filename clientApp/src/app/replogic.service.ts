import { Injectable } from '@angular/core';
import {Element} from "./reports/Form- Months";
import {Monthlist} from "./reports/rep Interface";
import {BatchService} from './services/batch.service';
import {CurriculaService} from './services/curricula.service';
import {Curriculum} from "./domain/curriculum";
import {ifTrue} from "codelyzer/util/function";
import {Batch} from './domain/batch';
import {GlobalSettings} from './domain/global-settings';
import {SettingsService} from "./services/global-settings.service";
import {DatePipe} from "@angular/common";


@Injectable()
export class ReplogicService {
  months: Monthlist[];
  ELEMENT_DATA: Element[]
  Trainer_Element: Element[]
  gm: Monthlist[];

  month= 'September';
  i: number;
  circula: Curriculum[];
  batch: Batch[];
  setting: GlobalSettings[] = [];
  date_parer: string;
  reportGrads = 13;
  reportIncomingGrads = 18;
  constructor(private circ: CurriculaService , private batchservice: BatchService , private settingvice: SettingsService) {
    this.getAllBatches();
    this.getDefaultSetting();
    this.months = [{
      name: 'Joe',
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
    },
      {
        name: '',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }, {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }, {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }

    ];
    this.gm =[{
      name: 'Joe',
      data: [0,0,0,0,0,0,0,0,0,0,0,0],
    },
      {
        name: '',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }, {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }, {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },
      {
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      },{
        name: 'Joe',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
      }

    ];


    this.ELEMENT_DATA = [
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},


    ];

    this. Trainer_Element= [
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},
      {Ciriculam: '', January: 0, febuaray: 0, march:0, april:0,may:0, june:0, july:0, august:0, september:0, october:0,november:0,december:0},


    ];
  }





  getElement() {
    this.circ.getAll().subscribe(circula => {
      this.circula = circula;
      this.batchservice.getAll().subscribe(batch => {
        this.batch = batch;
        this.settingvice.getSettings().subscribe(
          setting => {
            this.setting = setting;
            this.reportIncomingGrads = this.setting[0].reportIncomingGrads;
            this.reportGrads = this.setting[0].reportGrads;


            for (const x of Object.keys(this.batch)) {
              this.batch[x].startDate = new Date(this.batch[x].startDate).getMonth();
              this.batch[x].endDate = new Date(this.batch[x].endDate);
            }
              var y = 0 ;
              var test= true;
              for ( let x= 0 ; x< this.circula.length; x++) {
                if ( this.circula[x].core) {
                  this.ELEMENT_DATA[y].Ciriculam = this.circula[x].name;
                  y++;
                  for ( let z = 0 ; z < batch.length ; z++ ) {
                    if ( this.circula[x].currId === this.batch[z].curriculum ) {
                      var count  = 0 ;
                      var mt = y-1;
                     for ( let td =0 ; td<batch.length ; td++) {
                       if ( this.batch[td].endDate.getUTCMonth()== 0) {
                         count ++;
                         this.ELEMENT_DATA[mt].January = this.setting[0].reportIncomingGrads * count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 1) {
                         count ++;
                         this.ELEMENT_DATA[mt].febuaray = this.setting[0].reportIncomingGrads* count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 2) {
                         count ++;
                         this.ELEMENT_DATA[mt].march = this.setting[0].reportIncomingGrads * count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 3) {
                         count ++;
                         this.ELEMENT_DATA[mt].april = this.setting[0].reportIncomingGrads * count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 4) {
                         count ++;
                         this.ELEMENT_DATA[mt].may = this.setting[0].reportIncomingGrads * count;
                       }if ( this.batch[td].endDate.getUTCMonth()== 5) {
                         count ++;
                         this.ELEMENT_DATA[y].june = this.setting[0].reportIncomingGrads * count;
                       }if ( this.batch[td].endDate.getUTCMonth()== 6) {
                         count ++;
                         this.ELEMENT_DATA[mt].july = this.setting[0].reportIncomingGrads * count;
                       }if ( this.batch[td].endDate.getUTCMonth()== 7) {
                         count ++;
                         this.ELEMENT_DATA[mt].august = this.setting[0].reportIncomingGrads* count;
                       }if ( this.batch[td].endDate.getUTCMonth()== 8) {
                         count ++;
                         this.ELEMENT_DATA[mt].september = this.setting[0].reportIncomingGrads* count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 9) {
                         count ++;
                         this.ELEMENT_DATA[mt].october = this.setting[0].reportIncomingGrads* count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 10) {
                         count ++;
                         this.ELEMENT_DATA[mt].november = this.setting[0].reportIncomingGrads* count;
                       }
                       if ( this.batch[td].endDate.getUTCMonth()== 11) {
                         count ++;
                         this.ELEMENT_DATA[mt].december = this.setting[0].reportIncomingGrads * count;
                       }
                     }
                    }
                  }
                }}}); } ); } );
    return this.ELEMENT_DATA;
  }






  getList() {
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[0] = this.ELEMENT_DATA[y].January;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[1] = this.ELEMENT_DATA[y].febuaray;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[2] = this.ELEMENT_DATA[y].march;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[3] = this.ELEMENT_DATA[y].april;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[4] = this.ELEMENT_DATA[y].may;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[5] = this.ELEMENT_DATA[y].june;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[2].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[6] = this.ELEMENT_DATA[y].july;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[7] = this.ELEMENT_DATA[y].august;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[8] = this.ELEMENT_DATA[y].september;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[9] = this.ELEMENT_DATA[y].october;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[10] = this.ELEMENT_DATA[y].november;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.ELEMENT_DATA.length; x++) {
      this.months[x].name = this.ELEMENT_DATA[y].Ciriculam;
      this.months[x].data[11] = this.ELEMENT_DATA[y].december;
      y++;
    }

    return this.months;
  }

  getTrainerElement() {
    this.circ.getAll().subscribe(circula => {
      this.circula = circula;
      this.batchservice.getAll().subscribe(batch => {
        this.batch = batch;
        this.settingvice.getSettings().subscribe(
          setting => {
            this.setting = setting;
            this.reportIncomingGrads = this.setting[0].reportIncomingGrads;
            this.reportGrads = this.setting[0].reportGrads;


            for (const x of Object.keys(this.batch)) {
              this.batch[x].startDate = new Date(this.batch[x].startDate).getMonth();
              this.batch[x].endDate = new Date(this.batch[x].endDate);
            }
            console.log(this.batch[0].endDate.getMonth());
            var y = 0 ;
            var test= true;
            for ( let x= 0 ; x< this.circula.length; x++) {
              if ( this.circula[x].core) {
                this.Trainer_Element[y].Ciriculam = this.circula[x].name;
                y++;
                for ( let z = 0 ; z < batch.length ; z++ ) {
                  if ( this.circula[x].currId === this.batch[z].curriculum ) {
                    var count  = 0 ;
                    var mt = y-1;
                    var jan=0;
                    var feb=0;
                    var march=0;
                    var april=0;
                    var may=0;
                    var june=0;
                    var jully=0;
                    var august=0;
                    var september=0;
                    var october=0;
                    var november=0;
                    var december=0;
                    for ( let td =0 ; td<batch.length ; td++) {
                      console.log('This Zainab');
                      if ( this.batch[z].endDate.getUTCMonth()==this.batch[td].endDate.getUTCMonth()&&this.batch[td].endDate.getUTCMonth()== 0) {
                        jan=+1;
                        this.Trainer_Element[mt].January = this.setting[0].reportIncomingGrads * jan;
                        console.log('shahak1');
                        console.log(count);
                        console.log(this.Trainer_Element[mt].January);
                        console.log('shahak2');
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 1) {
                        feb=+1;
                        this.Trainer_Element[mt].febuaray = this.setting[0].reportIncomingGrads * feb;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 2) {
                        march=+1;
                        this.Trainer_Element[mt].march = this.setting[0].reportIncomingGrads * march;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 3) {
                        april=+1;
                        this.Trainer_Element[mt].april = this.setting[0].reportIncomingGrads*april;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()==this.batch[td].endDate.getUTCMonth()&&this.batch[td].endDate.getUTCMonth()==4) {
                        may=+1;
                        this.Trainer_Element[mt].may = this.setting[0].reportIncomingGrads *(may+may);
                        console.log('gajini');
                        console.log(td);
                        console.log('ek tha tiger');
                      }if ( this.batch[z].endDate.getUTCMonth()== 5) {
                        june=+1;
                        this.Trainer_Element[mt].june = this.setting[0].reportIncomingGrads * june;
                      }if ( this.batch[z].endDate.getUTCMonth()== 6) {
                        jully=+1;
                        this.Trainer_Element[mt].july = this.setting[0].reportIncomingGrads* jully;
                      }if ( this.batch[z].endDate.getUTCMonth()== 7) {
                        august=+1;
                        this.Trainer_Element[mt].august = this.setting[0].reportIncomingGrads* august;
                      }if ( this.batch[z].endDate.getUTCMonth()== 8) {
                        september=+1;
                        this.Trainer_Element[mt].september = this.setting[0].reportIncomingGrads * september;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 9) {
                        october=+1;
                        this.Trainer_Element[mt].october = this.setting[0].reportIncomingGrads* october;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 10) {
                        november=+1;
                        this.Trainer_Element[mt].november = this.setting[0].reportIncomingGrads* november;
                      }
                      if ( this.batch[z].endDate.getUTCMonth()== 11) {
                        december=+1;
                        this.Trainer_Element[mt].december = this.setting[0].reportIncomingGrads* december;
                      }
                    }
                  }
                }
              }}}); } ); } );
    return this.Trainer_Element;
  }





  getTrainerList() {
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[0] = this.Trainer_Element[y].January;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[1] = this.Trainer_Element[y].febuaray;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[2] = this.Trainer_Element[y].march;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[3] = this.Trainer_Element[y].april;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[4] = this.Trainer_Element[y].may;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[5] = this.Trainer_Element[y].june;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[6] = this.Trainer_Element[y].july;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[7] = this.Trainer_Element[y].august;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[8] = this.Trainer_Element[y].september;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[9] = this.Trainer_Element[y].october;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[10] = this.Trainer_Element[y].november;
      y++;
    }
    var y= 0 ;
    for (let x = 0 ; x < this.Trainer_Element.length; x++) {
      this.gm[x].name = this.Trainer_Element[y].Ciriculam;
      this.gm[x].data[11] = this.Trainer_Element[y].december;
      y++;
    }

    return this.gm;
  }


  getAllBatches() {
    this.batchservice.getAll().subscribe(batch => {
      this.batch = batch;
      for (const x of Object.keys(this.batch)) {
        this.batch[x].startDate = new Date(this.batch[x].startDate);
        this.batch[x].endDate = new Date(this.batch[x].endDate);
      } console.log(this.batch);
      console.log(this.batch[0].startDate.getUTCFullYear());
      console.log(this.batch[0].startDate.getUTCMonth(), this.batch[0].endDate.getUTCMonth());
      console.log(this.batch[1].startDate.getUTCMonth(), this.batch[1].endDate.getUTCMonth());});
  }

  getDefaultSetting() {
    this.settingvice.getSettings().subscribe(
      setting => {
        this.setting = setting;
        this.reportIncomingGrads = this.setting[0].reportIncomingGrads;
        this.reportGrads = this.setting[0].reportGrads;

      }, err => console.log(err)
    );
  }













}
