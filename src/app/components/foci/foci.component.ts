import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddFocusComponent } from '../add-focus/add-focus.component';
import { EditFocusComponent } from '../edit-focus/edit-focus.component';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';
import { Focus } from '../../model/Focus';

@Component({
  selector: 'app-foci',
  templateUrl: './foci.component.html',
  styleUrls: ['./foci.component.css']
})
export class FociComponent implements OnInit {
  constructor(private dialog: MatDialog, private focusControllerService: FocusControllerService) {}

  //The array of focuses to be displayed in the list
  focusData: Focus[] = [];

  //Sets up all the focuses that will need to be displayed
  ngOnInit() {
    this.focusControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.focusData = data;
      });
  }

  //Opens up the Add Focus Modal
  openAddFocusDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AddFocusComponent, {});
    dialogRef
      .afterClosed()
      .toPromise()
      .then(result => {
        this.refreshFocuses();
      });
  }

  //Opens up the Edit Focus Modal
  openEditFocusDialog(focus) {
    const dialogRef = this.dialog.open(EditFocusComponent, {
      data: focus
    });
    dialogRef
      .afterClosed()
      .toPromise()
      .then(result => {
        this.refreshFocuses();
      });
  }

  //Refreshes the list of focuses.  This is to be used after changing the data in the backend.
  refreshFocuses(): void {
    this.focusControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.focusData = data;
        console.log(this.focusData);
      });
  }

  //This is used to remove, and confirm removal of focuses.
  confirmRemoveFocus(focus) {
    if (confirm('Are you sure you want to remove ' + focus.name + '?')) {
      this.focusControllerService
        .remove(focus.id)
        .toPromise()
        .then(() => {
          this.refreshFocuses();
        })
        .catch(err => {
          alert('Error occurred while removing focus');
          console.log(err);
        });
    }
  }
}
