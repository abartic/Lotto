import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TicketModel } from "../models/ticket.model";

@Component({
  selector: 'new-ticket-dialog',
  templateUrl: 'new-ticket-dialog.html',
})
export class NewTicketDialog {

  
  constructor(
    public dialogRef: MatDialogRef<NewTicketDialog>,
    @Inject(MAT_DIALOG_DATA) public ticket: TicketModel) { }
}



