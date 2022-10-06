import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventosService } from './eventos.service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { AuthGuard } from './auth.guard';
import { MyresolverResolver } from './myresolver.resolver';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingRoutingModule
  ],
  providers: [EventosService, AuthGuard, MyresolverResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
