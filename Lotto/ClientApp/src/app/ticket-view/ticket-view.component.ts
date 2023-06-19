import { Component } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent {

}


const ELEMENT: Ticket =
{
  serialNumber: '1',
  boxCount: 12,
  hasSuperNumber: true,

  ticketBoxes: TicketBox = [];
};
