import { Component, Input } from '@angular/core';
import { TicketModel } from '../models/ticket.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html'
})
export class TicketFormComponent  {

  @Input() public ticket: TicketModel | null = null;
  
  constructor() {
  }

}


