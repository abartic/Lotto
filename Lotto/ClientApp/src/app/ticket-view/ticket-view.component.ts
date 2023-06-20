import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { TicketModel } from '../models/ticket.model';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent  {

  public ticket: TicketModel | null = null;
  private sub: Subscription = null!;
  errorMsg: string | null = null;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ticketsService: TicketsService) {
    const serialNumber: string = this.activatedRoute.snapshot.queryParams['serialNumber'] || '';
    if (!serialNumber) return;

    this.sub = this.ticketsService.getTicketBySerialNumber(serialNumber)
      .pipe(
        catchError(err => of(false)))
      .subscribe((ticket: TicketModel | boolean) => {
        this.ticket = ticket as TicketModel;
        this.errorMsg = ticket ? null : 'Ticket loading failed';
      });
  }

  back() {
    this.router.navigate(['tickets-list'], {});
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}


