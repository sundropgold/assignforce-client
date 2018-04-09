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
  focusData: Focus[] = [];

  constructor(private dialog: MatDialog, private focusControllerService: FocusControllerService) {}

  ngOnInit() {
    this.focusControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.focusData = data;
      });
  }

  openAddFocusDialog(event: Event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AddFocusComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.refreshFocuses();
    });
  }

  openEditFocusDialog(focus) {
    const dialogRef = this.dialog.open(EditFocusComponent, {
      data: focus
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshFocuses();
    });
  }

  refreshFocuses(): void {
    this.focusControllerService
      .findAll()
      .toPromise()
      .then(data => {
        this.focusData = data;
      });
  }

  confirmRemoveFocus(focus) {
    if (confirm('Are you sure you want to remove ' + focus.name + '?')) {
      this.focusControllerService
        .remove(focus.id)
        .toPromise()
        .then()
        .catch(err => {
          alert('Error occurred while removing focus');
          console.log(err);
        });
    }
    this.refreshFocuses();
  }
}
