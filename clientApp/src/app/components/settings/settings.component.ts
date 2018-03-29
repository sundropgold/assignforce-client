import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GetApiUrlService } from '../../services/api/getApiUrl.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  //these numbers should be changing from the database if we want to set defaults unless we have constant value that will not change.

  private trainerPerPage: number;
  private outgoingGrads: number;
  private candidateIncoming: number;
  private batchLocation: string;
  private batchBuilding: string;
  private minBatchSize: number;
  private maxBatchSize: number;
  private batchDuration: number;
  private daysBetweenBatches: number;
  private namePattern = '$y$m $mmm$d $c';

  constructor(private apiService: GetApiUrlService) {}

  ngOnInit() {
    this.getSettingsInfo();
  }

  // saves the settings information
  save() {
    console.log(this.trainerPerPage);
  }

  // grabs settings information
  getSettingsInfo() {
    this.getRequestTest()
      .toPromise()
      .then(result => {
        this.trainerPerPage = result;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // resets the settings information
  reset(e) {
    e.preventDefault();
    console.log('resetting your mum');
  }

  getRequestTest(): Observable<number> {
    return of(2);
  }
}
