import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements AfterViewInit {
  displayedColumns: string[] = ['serialNumber', 'boxCount', 'hasSuperNumber', 'operations'];
  dataSource = new MatTableDataSource<Ticket>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openTicket(element: Ticket)
  {

  }
}

const ELEMENT_DATA: Ticket[] = [
  { serialNumber: '1', boxCount: 12, hasSuperNumber: true },
  { serialNumber: '2', boxCount: 12, hasSuperNumber: true },
  { serialNumber: '3', boxCount: 12, hasSuperNumber: true },
  { serialNumber: '4', boxCount: 12, hasSuperNumber: true },
  { serialNumber: '5', boxCount: 12, hasSuperNumber: false },
  { serialNumber: '6', boxCount: 10, hasSuperNumber: false },

];
