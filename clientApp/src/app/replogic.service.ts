import { Injectable } from '@angular/core';
import {Element} from "./reports/Form- Months";
import {Monthlist} from "./reports/rep Interface";

@Injectable()
export class ReplogicService {
  months: Monthlist[];
  ELEMENT_DATA: Element[]
  month= 'September';
  i: number;
  constructor() {
    this.months = [{
      name: 'Joe',
      data: [0],
    },
      {
        name: 'Joe',
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

    ];
    this.ELEMENT_DATA = [
      {Ciriculam: 'java', January: 9, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},
      {Ciriculam: 'Angular', January: 12, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},
      {Ciriculam: 'SQL', January: 12, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},
      {Ciriculam: 'Big Data', January: 12, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},
      {Ciriculam: 'Spring', January: 12, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},
      {Ciriculam: 'Hibernate', January: 12, febuaray: 1, march:2, april:2,may:10, june:10, july:2, august:10, september:10, october:120,november:10,december:120},

    ];
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
    return this.months;
  }

  getElement() {
    return this.ELEMENT_DATA;
  }

}
