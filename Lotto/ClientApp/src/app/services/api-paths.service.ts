import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class ApiPathsService {

  private static baseUrl = environment.baseUrl;
  private static version1 = '/api/v1';
  private static tcketsController = '/Ticket';

  createTicketRoute()
  {
    return ApiPathsService.baseUrl + ApiPathsService.version1 + ApiPathsService.tcketsController
  };

  getAllTicketsRoute()
  {
    return ApiPathsService.baseUrl + ApiPathsService.version1 + ApiPathsService.tcketsController;
  }

  getTicketBySerialNumberRoute(serialNumber: string)
  {
    return ApiPathsService.baseUrl + ApiPathsService.version1 + ApiPathsService.tcketsController + `/${serialNumber}`;
  };
  
}
