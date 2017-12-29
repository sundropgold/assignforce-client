import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class PtoService {

  constructor(
    private router: Router
  ) {
  }

  authorize() {

  }

  showCalendar(){

  }

  getGoogle(){
    this.router.navigate(['api/v2/google/google']);
  }

  addPto(trainer, startDate, endDate) {


  }
}
