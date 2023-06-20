import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTicketModel } from '../models/create-ticket.model';
import { TicketModel } from '../models/ticket.model';
import { TicketListItemModel } from '../models/ticketListItem.model';
import { ApiPathsService } from './api-paths.service';

@Injectable()
export class TicketsService {

  constructor(private http: HttpClient, private apiPaths: ApiPathsService) { }

  getAllTickets(): Observable<TicketListItemModel[]> {
    return this.http.get<any[]>(this.apiPaths.getAllTicketsRoute());
  }

  getTicketBySerialNumber(serialNumber: string): Observable<TicketModel> {
    return this.http.get<TicketModel>(this.apiPaths.getTicketBySerialNumberRoute(serialNumber));
  }

  createTicket(model: CreateTicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(this.apiPaths.createTicketRoute(), model);
  }

  
}

