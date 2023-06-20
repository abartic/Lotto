import { TicketBoxModel } from "./ticket-box.model";

export class TicketModel {

  public constructor(public serialNumber: string, public superNumber?: number, public ticketBoxes?: TicketBoxModel[]) { }

  
  
}
