import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketModel } from '../models/ticket.model';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent  {

  public ticket: TicketModel = null!;
  private sub: Subscription = null!;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService) {
    const serialNumber: string = this.activatedRoute.snapshot.queryParams['serialNumber'] || '';
    if (!serialNumber) return;

    this.sub = this.ticketsService.getTicketBySerialNumber(serialNumber)
      .subscribe((ticket: any) => {
        this.ticket = ticket;
      });
  }

  back() {
    this.router.navigate(['tickets-list'], {});
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}


