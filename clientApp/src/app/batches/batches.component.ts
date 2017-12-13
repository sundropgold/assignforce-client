import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  batchValues = ['Name', 'Curriculum', 'Focus', 'Trainer/Co-Trainer', 'Loocation', 'Building', 'Room', 'Start Date', 'End Date'];

  constructor() { }

  ngOnInit() {
  }

}
