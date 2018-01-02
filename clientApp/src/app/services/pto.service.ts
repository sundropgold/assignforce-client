import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {showWarningOnce} from 'tslint/lib/error';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {CalendarDialogComponent} from '../pto/pto.component';


@Injectable()
export class PtoService {

  constructor(private router: Router) {
  }


  getGoogle() {
    this.router.navigate(['api/v2/google/google']);
  }

  addPto(trainer, startDate, endDate) {

  console.log("Start: " + startDate + " End: " + endDate);
  }
}
