import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsListComponent } from './events-list/events-list.component';
import { MyresolverResolver } from './myresolver.resolver';

const routes: Routes = [
  { path: 'event-list', component: EventsListComponent, 
    resolve: { list : MyresolverResolver }
  },
  { path: 'detail/:id', component: EventDetailComponent, canActivate: [ AuthGuard ], canDeactivate: [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
