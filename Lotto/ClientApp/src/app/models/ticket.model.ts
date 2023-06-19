import { TicketBox } from "./ticket-box.model";

export class Ticket {

  public constructor(public serialNumber: string, public boxCount: number, public hasSuperNumber?: boolean, public ticketBoxes?: TicketBox[]) { }

  
  
}
