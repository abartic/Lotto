import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private sub: Subscription = null!;

  constructor(private router: Router, private ticketsService: TicketsService) {
  }

  ngAfterViewInit() {
    if (!this.paginator)
      this.dataSource.paginator = this.paginator;
          
    this.sub = this.ticketsService.getAllTickets()
      .subscribe((list: TicketListItemModel[]) => {
        console.log(list);
        this.dataSource = new MatTableDataSource<TicketModel>(list);
      });
  }

  openTicket(element: TicketModel)
  {
    this.router.navigate(['ticket-view'], { queryParams: { serialNumber: element.serialNumber } });
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}


