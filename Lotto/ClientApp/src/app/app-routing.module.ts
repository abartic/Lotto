import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'tickets-list', component: TicketsListComponent },
  { path: 'ticket-view', component: TicketViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
