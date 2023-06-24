import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { CreateTicketModel } from '../models/create-ticket.model';
import { TicketModel } from '../models/ticket.model';
import { TicketsService } from '../services/tickets.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewTicketDialog } from '../new-ticket/new-ticket-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isNewTicketPanelOpen: boolean = true;
  public isSuperzahlIncluded: boolean = true;
  public boxCount: number = 12;

  private sub: Subscription = null!;
  constructor(private router: Router, private ticketsService: TicketsService, public dialog: MatDialog ) {
    
    this.router.navigate(['tickets-list'], {});
    
  }

  createTicket() {
    var ticketModel = new CreateTicketModel(this.boxCount, this.isSuperzahlIncluded);
    this.sub = this.ticketsService.createTicket(ticketModel)
      .pipe(
        catchError(err => of(false)))
      .subscribe((ticket : TicketModel | boolean) => {
        if (ticket as TicketModel) {
          this.ticketsService.notifyTicketCreated();

          this.dialog.open(NewTicketDialog, {
            enterAnimationDuration: '500ms',
            exitAnimationDuration: '500ms',
            data: ticket as TicketModel
          });
        }
        else {
          alert('Create ticket failed!');
        }
      });
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}
