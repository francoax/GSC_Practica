import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventosService } from './eventos.service';
import { Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class MyresolverResolver implements Resolve<Events[]> {

  constructor(private service: EventosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Events[]> | Events[]{
    return this.service.getEvents();
  }
}
