import { Injectable } from '@angular/core';
import { Event } from './entitie/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  EVENTS : Event[] =  [
    {
      id : 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Rd',
        city: 'London',
        country: 'England'
      }
    },
    {
      id : 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: '127 DT ',
        city: 'Amsterdam',
        country: 'NL'
      }
    },
    {
      id : 3,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    {
      id : 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      }
    },
  ];

  // Por el .value, obtengo los valores como la estructura definida de evento y puedo trabajarlo.
  saveEvent(event: Event) {
    event.id = 99;
    this.EVENTS.push(event);
  }

  getEvents() {
    return this.EVENTS;
  }
}
