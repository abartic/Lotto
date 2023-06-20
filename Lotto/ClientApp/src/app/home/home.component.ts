import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
    
    this.router.navigate(['tickets-list'], { });
  }

  createTicket()
  {
    var ticketModel = new CreateTicketModel(this.boxCount, this.isSuperzahlIncluded);
    this.sub = this.ticketsService.createTicket(ticketModel)
      .subscribe((createdTicket: TicketModel) => {

        this.router.navigate(['tickets-list'], {});

      }, (error) => {
        
        alert('Draw Ticket fadile!');
      });
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}
