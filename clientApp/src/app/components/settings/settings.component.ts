import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  onclick() {
    console.log(this.trainerPerPage);
  }
}
