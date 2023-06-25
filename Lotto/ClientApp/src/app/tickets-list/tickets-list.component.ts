import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, of, Subscription } from 'rxjs';
import { TicketModel } from '../models/ticket.model';
import { TicketListItemModel } from '../models/ticketListItem.model';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements AfterViewInit {
  displayedColumns: string[] = ['serialNumber', 'boxCount', 'hasSuperNumber', 'operations'];
  dataSource: MatTableDataSource<TicketModel> = null!;
  ticketList: TicketListItemModel[] = null!;
  

  private subFetchTicketsSource: Subscription = null!;
  private subCreateTicketNotifications: Subscription = null!;
  errorMsg: string | null = null;

  constructor(private router: Router, private ticketsService: TicketsService) {
    this.subCreateTicketNotifications = this.ticketsService.ticketCreationNotifications$.subscribe(tCreated => {
      if (tCreated)
        this.loadTicketsList();
    })
  }

  ngAfterViewInit() {
          
      this.loadTicketsList();
  }

  loadTicketsList() {

    this.subFetchTicketsSource = this.ticketsService.getAllTickets()
      .pipe(
        catchError(err => of(false)))
      .subscribe((list: TicketListItemModel[] | boolean) => {
        if (list instanceof Array) {
          this.errorMsg = null;
          this.ticketList = list;
        }
        else {
          this.ticketList = [];
          this.errorMsg = 'Ticket loading failed';
        }
        this.dataSource = new MatTableDataSource<TicketModel>(this.ticketList);
        
      });
  }

  openTicket(element: TicketModel)
  {
    this.router.navigate(['ticket-view'], { queryParams: { serialNumber: element.serialNumber } });
  }

  onDestroy() {
    if (this.subFetchTicketsSource) this.subFetchTicketsSource.unsubscribe();
    if (this.subCreateTicketNotifications) this.subCreateTicketNotifications.unsubscribe();
  }
}


