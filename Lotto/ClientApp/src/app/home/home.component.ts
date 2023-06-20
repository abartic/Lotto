import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { CreateTicketModel } from '../models/create-ticket.model';
import { TicketModel } from '../models/ticket.model';
import { TicketsService } from '../services/tickets.service';

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
  constructor(private router: Router, private ticketsService: TicketsService ) {
    
    this.router.navigate(['tickets-list'], {});
    
  }

  createTicket() {
    var ticketModel = new CreateTicketModel(this.boxCount, this.isSuperzahlIncluded);
    this.sub = this.ticketsService.createTicket(ticketModel)
      .pipe(
        catchError(err => of(false)))
      .subscribe((ticket : TicketModel | boolean) => {
        if (ticket as TicketModel)
          this.ticketsService.notifyTicketCreated();
        else
          alert('Create ticket failed!');
      });
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}
