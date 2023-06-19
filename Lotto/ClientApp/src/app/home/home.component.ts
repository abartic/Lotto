import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isNewTicketPanelOpen: boolean = true;
  public isSuperzahlIncluded: boolean = true;
  public boxCount: number = 12;

  router!: Router;
  constructor(router: Router) {

    this.router = router;
    this.router.navigate(['tickets-list'], { });
  }
}
